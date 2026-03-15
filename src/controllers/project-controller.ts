import { Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { AuthRequest } from "../middlewares/auth-middleware";

const prisma = new PrismaClient();

//generate abbreviation
const generateAbbreviation = (title:string):string=>{
    const words = title.trim().split(/\s+/);
    if(words.length>=2){
        const first = words[0] || "";
        const second = words[1] || "";
        return (first.charAt(0) + second.charAt(0)).toUpperCase();
    }
    return title.substring(0,2).toUpperCase();
};

export const createProject = async (req:AuthRequest,res:Response):Promise<void>=>{
    try{
        const {title,description,manager_id}=req.body;
        //grab the id of the person making the req
        const creatorId =req.user!.id;
        //auto-generate abbreviation
        const abbreviation = generateAbbreviation(title);
        const newProject = await prisma.project.create({
            data:{
                title,
                description,
                manager_id,
                abbreviation,
                created_by:creatorId
            }
        });
        res.status(201).json({
            message:"Project created successfully!",
            project:newProject
        });
    }catch(e){
        console.error("Error creating Project:",e);
        res.status(500).json({message:"Failed to create Project"})
    }
};