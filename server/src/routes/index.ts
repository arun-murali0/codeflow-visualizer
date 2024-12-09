import { Router } from 'express';
import { createNewUser } from '../controllers';

const router = Router();

// user Routes
router.post('/sign-up', createNewUser);


export default router;
