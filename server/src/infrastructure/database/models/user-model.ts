import mongoose, { Schema } from 'mongoose';
import { UserProp } from '../../../types';

const user: Schema = new mongoose.Schema<UserProp>({
	firstName: {
		type: String,
		require: true,
	},
	lastName: {
		type: String,
		require: true,
	},
	userName: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
});

export const users = mongoose.model<UserProp>('users', user);
