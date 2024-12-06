import { password_to_hash } from '../../utils/bcrypt-hash';
import { userValidationSchema } from '../validation/userSchema';

export const userEntities = async (userDetails: UserProp): Promise<UserProp> => {
	try {
		const parsedUserData = userValidationSchema.parse(userDetails);

		const { password, ...userData } = parsedUserData;

		const hashedPassword = password_to_hash(password!);

		return {
			...userData,
			password: hashedPassword,
		};
	} catch (error) {
		throw new customError(error.message, 400);
	}
};
