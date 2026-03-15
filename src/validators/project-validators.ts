import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3, "Title must be atleast 3 characters"),
  description: z.string().optional(),
  manager_id: z.number().int("Manager ID must have a valid number"),
});
