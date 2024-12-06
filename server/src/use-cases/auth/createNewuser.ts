import { userRepositories } from '../../infrastructure/database/repositorie-actions/user-repository';
import { userEntities } from '../../domain/entities/userEntities';
import { customError } from '../../domain/errors/ErrorHandler';
import { UserProp } from '../../types';

export const createNewUser = async (userData: UserProp) => {
	try {
		const user = await userEntities(userData);

		const existingUser = await userRepositories.findByEmail(userData.email);

		if (existingUser) {
			throw new customError('user already exist', 400);
		}

		const saveUser = await userRepositories.create(user);
		return saveUser;
	} catch (error) {
		throw new customError(error.message || 'error creating a new user', error.statusCode || 500);
	}
};
