import { NextFunction, Request, Response } from 'express';
import { customError } from '../utils/errorHandler';

export const errorHandler = (
	err: unknown,
	res: Response,
	_req: Request,
	next: NextFunction
): Response<any, Record<string, number>> => {
	if (err instanceof customError) {
		return res.status(err.errorCode).json(err.errorMessage);
		next();
	}

	if (err instanceof Error) {
		return res.status(500).json({ error: err.message });
	}

	return res.status(500).json('error');
};
