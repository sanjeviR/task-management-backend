import {Request,Response,NextFunction} from 'express';
import  jwt  from 'jsonwebtoken';

//our Request might now have a 'user' attached to it
export interface AuthRequest extends Request {
    user?: {id:number; role:string};
}

export const verifyToken = (req:AuthRequest, res:Response,next:NextFunction):void =>{
    const authHeader = req.headers.authorization;

    //If there is no badge, or it doesn't start with "Bearer ", restrict
    if(!authHeader || !authHeader.startsWith('Bearer')){
        res.status(401).json({message:"Access Denied."});
        return;
    }

    //extract the token alone
    const token = authHeader.split(' ')[1];
    if(!token){
        res.status(401).json({message:"Access Denied"})
        return;
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET as string) as unknown as{id:number;role:string};
        req.user = decode;
        next();
    }catch(error){
        res.status(403).json({message:"Invalid"});
        return;
    }
};


//check if the user has the right role
export const authorizedRoles = (...allowedRoles:string[])=>{
    return(req:AuthRequest,res:Response,next:NextFunction):void=>{
        //check if the user os exist on the request
        if(!req.user){
            res.status(401).json({message:"Unauthorized. Please Login first."});
            return;
        }
        if(!allowedRoles.includes(req.user.role)){
            res.status(403).json({message:"Access Denied!"});
            return;
        }
        next();
    };
};
