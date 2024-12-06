import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

// user routes

// registration
router.post('/createuser', userController.createNewUser);
//login
router.post("/userlogin",userController.userLogin)

export default router;
