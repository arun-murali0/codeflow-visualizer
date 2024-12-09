import { Router } from 'express';
import { CreateNewUser } from '../controllers';

const router = Router();

router.post('/sign-up', CreateNewUser);

export default router;
