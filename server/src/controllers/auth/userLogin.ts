import { Request, Response } from 'express';
import { customError } from '../../utils/errorHandler';

declare module 'express-session' {
	interface SessionData {
		passport: {
			user?: string;
		};
	}
}

export const userLogin = (req: Request, res: Response) => {
	try {
		const user = req.session.passport?.user;

		if (user) {
			res.status(200).json({ message: 'Login successful' });
		}else{
			res.redirect("/sign-in")
		}

		
	} catch (error) {
		throw new customError(error.message, 400);
	}
};
