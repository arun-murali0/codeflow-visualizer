import { UserProp } from '../../types';
import { User } from '../data-schema/user-schema';

export const userRepository = {
	create: async (userDetails: UserProp): Promise<UserProp | null> => {
		return await User.create(userDetails);
	},

	findByEmail: async (email: string): Promise<UserProp | null> => {
		return await User.findOne({ email: email });
	},

	findById: async (id: string): Promise<UserProp | null> => {
		return await User.findOne({ _id: id });
	},
};
