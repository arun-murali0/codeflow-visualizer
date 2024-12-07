import { Router } from 'express';
import { userController } from '../controllers/userController';
import { authenticateUser } from '../middelwares/passport';
import "../../framework/passport/local-strategy"

const router = Router();

// user routes

// registration
router.post('/createuser', userController.createNewUser);
//login
router.post('/userlogin', authenticateUser, userController.userLogin);

export default router;
