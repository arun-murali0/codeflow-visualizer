import { Router } from 'express';
import { userLogin, createNewUser } from '../controllers';
import passport from 'passport';
import '../utils/passport-auth';

const router = Router();

// user Routes
router.post('/sign-up', createNewUser);
router.post('/sign-in', passport.authenticate('local'), userLogin);

export default router;
