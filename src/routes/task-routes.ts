import { Router } from "express";
import { createTask, updateTask } from "../controllers/task-controller";
import { validateRequest } from "../middlewares/validate-request";
import { createTaskSchema, updateTaskSchema } from "../validators/task-validators";
import { verifyToken, authorizedRoles } from "../middlewares/auth-middleware";


const router = Router();

//  Admins and Managers can create tasks
router.post('/',verifyToken,authorizedRoles("ADMIN","MANAGER"),validateRequest(createTaskSchema),createTask);
router.put('/:id',verifyToken,validateRequest(updateTaskSchema),updateTask);

export default router;