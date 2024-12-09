import passport, { DoneCallback } from 'passport';
import { Strategy } from 'passport-local';
import { userServices } from '../services/userService';
import { comparePassword } from './bcrypt-hashing';
import { UserProp } from '../types';

passport.serializeUser((user: Pick<UserProp, '_id'>, done: DoneCallback) => {
	return done(null, user._id);
});

passport.deserializeUser(async (id: string, done: DoneCallback) => {
	try {
		const user = await userServices.findById(id);
		done(null, user);
	} catch (error) {
		done(error);
	}
});

passport.use(
	new Strategy(
		{ usernameField: 'email', passwordField: 'password' },
		async (email: string, password: string, done: any) => {
			try {
				const user = await userServices.emailService(email);
				const match = comparePassword(user?.password!, password);
				if (!match) {
					done(null, false, { message: 'password mismatch' });
				}
				done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);
