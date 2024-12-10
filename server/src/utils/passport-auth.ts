import passport, { DoneCallback } from 'passport';
import { Strategy as localStrategy } from 'passport-local';
import { userServices } from '../services/userService';
import { comparePassword } from './bcrypt-hashing';
import { UserProp } from '../types';
import { customError } from './errorHandler';

passport.serializeUser((user: Pick<UserProp, '_id'>, done: DoneCallback) => {
	return done(null, user._id);
});

passport.deserializeUser(async (id: string, done: any) => {
	try {
		const user = await userServices.findById(id);
		if (!user) {
			throw new customError('user Not Found', 404);
		}

		done(null, user);
	} catch (error) {
		done(error);
		throw new customError(error.message, 400);
	}
});

passport.use(
	new localStrategy(
		{ usernameField: 'email', passwordField: 'password' },
		async (email: string, password: string, done: any) => {
			try {
				const user = await userServices.emailService(email);

				if (!user) {
					throw new customError('user Not Found', 404);
				}
				const match = comparePassword(password, user.password);

				if (!match) {
					throw new customError('password mismatch', 400);
				}
				done(null, user);
			} catch (error) {
				done(error);
				throw new customError(error.message, 400);
			}
		}
	)
);
