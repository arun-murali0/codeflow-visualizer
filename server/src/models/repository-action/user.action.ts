import { User } from '../data-schema/user-schema';

import { UserProp } from '../../types';

export const userRepository = {
	create: async (userData: UserProp): Promise<UserProp | null> => {
		return User.create(userData);
	},

	findById: async (id: string): Promise<UserProp | null> => {
		return User.findOne({ _id: id }).exec();
	},

	findByEmail: async (email: string): Promise<UserProp | null> => {
		return User.findOne({ email: email }).exec();
	},
};
