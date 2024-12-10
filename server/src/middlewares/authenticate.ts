import { NextFunction, Request, Response } from 'express';

 declare module 'express-session' {
	interface SessionData {
		passport: {
			user?: string;
		};
	}
}

export const checkAuthorized = (_req: Request, _res: Response, _next: NextFunction) => {
	try {
		const userSession = _req.session.passport?.user;
		if (userSession) {
			return _next();
		} else {
			_res.status(401).json({ message: 'Unauthorized' });
		}
	} catch (error) {
		console.error({ error: error });
	}
};
