import passport from 'passport';
import { Strategy } from 'passport-local';

passport.use(
	new Strategy(
		{ usernameField: 'email', passwordField: 'password' },
		(email: string, password: string, done: any) => {
			try {
			} catch (error) {
				done(error);
			}
		}
	)
);
