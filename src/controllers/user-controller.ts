import jwt from 'jsonwebtoken'
import {Request,Response} from 'express';
import prisma from '../configs/db';
import bcrypt from 'bcrypt'
import { AuthRequest } from '../middlewares/auth-middleware';


//get all user
export const getAllUser = async (req:Request,res:Response)=>{
    try{
        const users = await prisma.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                role:true,
                created_at:true,
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
        const {name, email, password,role} = req.body;
        const adminId = req.user!.id;

        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //tell prisma to create new user in DB
        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword,
                role,
                created_by:adminId
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
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            res.status(401).json({message:"Invalid email or password"});
            return;
        }
        //jwt
        const token = jwt.sign(
            {id:user.id, role:user.role},
            process.env.JWT_SECRET as string,
            {expiresIn: '1d'}
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