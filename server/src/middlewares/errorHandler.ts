import { NextFunction, Request, Response } from 'express';
import { customError } from '../utils/errorHandler';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	if (err instanceof customError) {
		return res.status(err.errorCode).json({ error: err.errorMessage });
	}

	return res.status(500).json({ error: 'Internal server error' });
};
