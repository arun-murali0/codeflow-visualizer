import { Request, Response } from 'express';

export class customError extends Error {
	errorCode: number;
	errorMessage: string;

	constructor(errorMessage: string, errorCode: number) {
		super(errorMessage);
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.name = this.constructor.name;
	}
}

export const errorHandler = async (err: any, _req: Request, res: Response): Promise<void> => {
	// If it's a custom error, handle it specifically
	if (err instanceof customError) {
		res.status(err.errorCode).json({ error: err.errorMessage });
		return;
	}

	// Handle general errors
	if (err instanceof Error) {
		res.status(500).json({ error: err.message || 'Internal server error' });
		return;
	}

	res.status(500).json({ error: 'Internal server error' });
	return;
};
