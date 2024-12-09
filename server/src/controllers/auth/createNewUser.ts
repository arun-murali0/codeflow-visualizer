import { Request, Response } from 'express';

export const CreateNewUser = async (req: Request, res: Response) => {
	try {
		const userData = req.body;

		res.status(200).json({ message: 'Sign up successfull' });
	} catch (error) {
		console.error({ error: error.message });
	}
};
