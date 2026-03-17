import { Router } from "express";
import { createProject } from "../controllers/project-controller";
import { validateRequest } from "../middlewares/validate-request";
import { createProjectSchema } from "../validators/project-validators"
import { verifyToken,authorizedRoles } from "../middlewares/auth-middleware";

const router = Router();

//Only logged in users who are Admin or Manager can create projects
router.post('/',verifyToken,authorizedRoles('ADMIN'),validateRequest(createProjectSchema),createProject);
export default router;