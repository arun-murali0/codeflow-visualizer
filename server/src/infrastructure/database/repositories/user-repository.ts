import { users } from '../models/user-model';

export const userRepositories = {
	// creating a new user
	create: async (userDetails: string): Promise<any> => {
		return await users.create(userDetails);
	},

	// find user by email
	findByEmail: async (email: string): Promise<string | null> => {
		return await users.findOne({ email: email });
	},

	// find user by username
	findUserByUserName: async (username: string): Promise<string | null> => {
		return await users.findOne({ userName: username });
	},
};
