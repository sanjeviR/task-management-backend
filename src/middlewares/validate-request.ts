import {Request, Response, NextFunction} from 'express';
import {ZodType, ZodError} from 'zod';


export const validateRequest = (schema: ZodType<any>)=>{
    return (req:Request,res:Response,next:NextFunction): void =>{
        try{
            schema.parse(req.body);
            next();
        }catch(e){
            if(e instanceof ZodError){
                res.status(400).json({
                    message:"Validation Failed",
                    errors:e.issues.map(err=>({field:err.path[0], issue:err.message}))
                });
                
            }else{
                res.status(500).json({message:"Internal server error during validation"})
            }
        }
    }
}