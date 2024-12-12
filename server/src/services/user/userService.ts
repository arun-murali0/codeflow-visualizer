import { UserProp } from '../../types';
import { userRepository } from '../../models/repository-action/user.action';

export const userServices = {
	// new user
	newUser: async (userDetails: UserProp) => {
		return await userRepository.create(userDetails);
	},

	// find user
	emailService: async (email: string) => {
		return await userRepository.findByEmail(email);
	},

	// find By id
	findById: async (id: string) => {
		return await userRepository.findById(id);
	},
};
