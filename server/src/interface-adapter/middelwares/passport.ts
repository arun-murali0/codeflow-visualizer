import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

export const authenticateUser = (_req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('local', (err: any, user: UserProp, info: any) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.status(400).json({ message: info.message });
		}
		_req.user = user;
		next();
	});
};
