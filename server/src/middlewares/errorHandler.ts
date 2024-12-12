import { NextFunction, Request, Response } from 'express';
import { customError } from '../utils/errorHandler';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	// custom error
	if (err instanceof customError) {
		return res.status(err.errorCode).send({ error: err.errorMessage });
	}

	// system error
	if (err instanceof Error) {
		return res.status(500).json({ error: err.message || 'Internal server error' });
	}

	// default error
	return res.status(500).json({ error: 'something went wrong,try again after sometime' });
};
