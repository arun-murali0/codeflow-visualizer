import { users } from '../models/user-model';

export const userRepositories = {
	// creating a new user
	create: async (userDetails: UserProp): Promise<UserProp> => {
		return await users.create(userDetails);
	},

	// find user by email
	findByEmail: async (email: string): Promise<UserProp | null> => {
		return await users.findOne({ email: email });
	},

	// find user by id
	findByID: async (id: string): Promise<UserProp | null> => {
		return await users.findOne({ _id: id });
	},

	// find user by username
	findUserByUserName: async (username: string): Promise<UserProp | null> => {
		return await users.findOne({ userName: username });
	},
};
