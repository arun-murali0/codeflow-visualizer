import { Request, Response } from 'express';
import { createNewUser } from '../../use-cases/auth/createNewuser';

export const userController = {
	createNewUser: async (req: Request, res: Response) => {
		try {
			const userData = req.body;
			const user = await createNewUser(userData);

			if (user) {
				res.status(200).json({ message: 'user created successfully', user });
			}
		} catch (error) {
			console.error({ error: error });
		}
	},

	userLogin: () => {},
};
