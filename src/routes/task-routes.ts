import { Router } from "express";
import { createTask } from "../controllers/task-controller";
import { validateRequest } from "../middlewares/validate-request";
import { createTaskSchema } from "../validators/task-validators";
import { verifyToken, authorizedRoles } from "../middlewares/auth-middleware";


const router = Router();

//  Admins and Managers can create tasks
router.post('/',verifyToken,authorizedRoles("ADMIN","MANAGER"),validateRequest(createTaskSchema),createTask);

export default router;