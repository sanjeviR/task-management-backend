import { title } from "node:process";
import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  priority: z.enum(["Low", "Medium", "High"]),
  status: z.enum(["To Do", "In Progress", "Done"]),
  due_date: z.string().min(1, "Due date cannot be empty"),
  assigned_to: z.number().int("Assignee ID must be a valid whole number"),
  project_id: z.number().int("Project ID must be a valid whole number"),
  attachments: z.any().optional(),
});

export const updateTaskSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  priority: z.enum(["Low", "Medium", "High"]),
  status: z.enum(["To Do", "In Progress", "Done"]),
  due_date: z.string().min(1, "Due date cannot be empty"),
  assigned_to: z.number().int("Assignee ID must be a valid whole number"),
  attachments: z.any().optional(),
});