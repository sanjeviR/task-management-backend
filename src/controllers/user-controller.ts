import jwt from 'jsonwebtoken'
import {Request,Response} from 'express';
import prisma from '../configs/db';
import bcrypt from 'bcrypt'
import { AuthRequest } from '../middlewares/auth-middleware';
import crypto from 'crypto';
import {emailQueue} from '../queues/email-queue';


//get all user
export const getAllUser = async (req:Request,res:Response)=>{
    try{
        const users = await prisma.user.findMany({
            //select fields only required
            select:{
                id:true,
                name:true,
                email:true,
                role:true,
                created_at:true,
                is_active: true
            }
    });
        res.status(200).json(users);
    }catch(e){
        console.error('Error fetching users',e);
        res.status(500).json({message:"Failed to fetch users"})
    }
};

//create user
export const createUser = async (req:AuthRequest,res:Response):Promise<void>=>{
    try{
        const {name, email, role} = req.body;
        const adminId = req.user!.id;
        
        //generate activation token, creates a mathematically random 64-character hex string
        const activationToken = crypto.randomBytes(32).toString('hex');
        //generate dummy password
        const dummyPassword = crypto.randomBytes(16).toString('hex');

        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(dummyPassword, salt);

        //tell prisma to create new user in DB
        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword,
                role,
                created_by:adminId,
                activation_token:activationToken, //save token to DB
                is_active:false
            },
            select:{
                id:true,
                name:true,
                email:true,
                role:true,
                created_at:true,
                created_by:true
               
            }
        });
        await emailQueue.add('send-activation-email',{
            email:newUser.email,
            name:newUser.name,
            token: activationToken
        });
        res.status(201).json({message:'User created successfully!',user:newUser})
    }catch(e){
        console.error('Error creating user',e);
        res.status(500).json({message:'Failed to create user'});
    }
};

//login user
export const loginUser = async (req:Request,res:Response): Promise<void>=>{
    try{
        const {email, password}=req.body;
        //check the user
        const user = await prisma.user.findUnique({
            where:{email:email}
        });
        if(!user){
            res.status(401).json({message:"Invalid email or password"});
            return;
        }
        //block unactivated account 
        if(!user.is_active){
            res.status(403).json({message: "Please check your mail to activate your account first."});
            return;
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            res.status(401).json({message:"Invalid email or password"});
            return;
        }
        //jwt
        const token = jwt.sign(
            {id:user.id, role:user.role},
            process.env.JWT_SECRET as string,
            {expiresIn: '10m'}
        );
        //send badge to postman
        res.status(200).json({
            message:"Login successful!",
            token:token,
            user:{
                id:user.id,
                name:user.name,
                email:user.email,
                role:user.role,
            }
        });
    }catch(e){
        console.error('Error logging in:',e);
        res.status(500).json({message:'Failed to Login'})
    }
};

// Active Account
export const activateAccount = async (req: Request, res: Response): Promise<void> =>{
try{
    const {token, newPassword} = req.body;

    if(!token || !newPassword){
        res.status(400).json({message:"Token and new Password are required!"});
        return;
    }
    // find exact user holding token
    const user = await prisma.user.findFirst({
        where: {activation_token: token}
    });

    //if not, fake user
    if(!user){
        res.status(400).json({message:"Invalid token"});
        return;
    }

    //encrypt the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    //update db
    await prisma.user.update({
        where:{id:user.id},
        data:{
            password:hashedPassword,
            is_active: true, 
            activation_token: null,
            activated_at: new Date()
        }
    });
    res.status(200).json({message: "Account activated successfully!"})
}
catch(error){
    console.error("Error activating account:",error);
    res.status(500).json({message: "Failed to activate account"});
}
};