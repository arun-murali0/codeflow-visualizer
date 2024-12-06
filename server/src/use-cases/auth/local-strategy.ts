import { Strategy } from 'passport-local';
import passport, { DoneCallback } from 'passport';

import { userRepositories } from '../../infrastructure/database/repositories/user-repository';
import { verify_hashed_password } from '../../utils/bcrypt-hash';

// password serialise
passport.serializeUser((user: Pick<UserProp, '_id'>, done: DoneCallback) => {
	return done(null, user);
});

// deserialize
passport.deserializeUser(async (id: string, done: DoneCallback) => {
	try {
		const user = await userRepositories.findByID(id);
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
				const user = await userRepositories.findByEmail(email);
				console.log(user);
				if (!user) {
					done(null, false, { message: 'user not found' });
				}

				// check hashed passport
				const matchPassword = verify_hashed_password(password, user?.password!);

				if (!matchPassword) {
					return done(null, false, { message: 'please check the password' });
				}

				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}
	)
);
