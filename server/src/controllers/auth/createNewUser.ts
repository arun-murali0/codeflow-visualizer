import { Request, Response } from 'express';
import { userServices } from '../../services/userService';
import { passwordToHash } from '../../utils/bcrypt-hashing';
import { customError } from '../../utils/errorHandler';

export const createNewUser = async (req: Request, res: Response) => {
	try {
		let userData = req.body;

		// check email is already in database
		const checkUser = await userServices.emailService(userData.email);
		if (checkUser) {
			res.status(200).json({ message: 'user already registered' });
		}

		// password encryption
		userData.password = passwordToHash(userData.password);

		const user = await userServices.newUser(userData);

		res.status(200).json({ message: 'new user created', user });
	} catch (error) {
		throw new customError(error.message, 400);
	}
};
