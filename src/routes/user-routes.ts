import { Router } from "express";
import { getAllUser, createUser, loginUser, activateAccount } from "../controllers/user-controller";
import {validateRequest} from '../middlewares/validate-request' //guard
import { createUserSchema } from "../validators/user-validators";
import { verifyToken,authorizedRoles } from "../middlewares/auth-middleware";
const router = Router();

// /api/users get all users
router.get('/',verifyToken,authorizedRoles('ADMIN'),getAllUser);

// /api/create creates new user
router.post('/',verifyToken,authorizedRoles('ADMIN'),validateRequest(createUserSchema),createUser);

//login route /login
router.post('/login',loginUser)

//account activation
router.post('/activate', activateAccount);
export default router;
