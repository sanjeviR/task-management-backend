import { Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { AuthRequest } from "../middlewares/auth-middleware";


const prisma = new PrismaClient();

export const createTask = async (req:AuthRequest,res:Response):Promise<void> =>{
    try{
        const {title, description, priority, status, due_date, assigned_to, project_id, attachments} = req.body;
        const creatorId = req.user!.id;

        const newTask = await prisma.$transaction(async (tx)=>{
            //Find the project to get its abbreviation and current task count
            const project = await tx.project.findUnique({
                where:{id:project_id}
            });
            if(!project){
                throw new Error("PROJECT_NOT_FOUND");
            }
            //Calculate the next task number and generate the Ticket No
            const nextTaskNumber = project.task_count + 1;
            const ticket_no = `${project.abbreviation}-T${nextTaskNumber}`;

            //create task
            const task = await tx.task.create({
                data:{
                    title,
                    description:description || null,
                    priority,
                    status,
                    due_date:new Date(due_date),
                    assigned_to,
                    project_id,
                    ticket_no,
                    attachments:attachments || null,
                    created_by:creatorId
                }
            });
            //update the project to show the task count
            await tx.project.update({
                where:{id:project_id},
                data:{task_count:nextTaskNumber}
            });
            return task;
        });
        res.status(201).json({message:"Task created successfully!",
            task:newTask
        });
    }catch(error:any){
        console.error("Error creating task:",error);
        if(error.message === "PROJECT_NOT_FOUND"){
            res.status(404).json({message:"Project not found"});
            return;
        }
        res.status(500).json({message:"Failed to create task"});
    }
};