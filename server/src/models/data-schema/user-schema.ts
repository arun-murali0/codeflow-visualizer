import mongoose, { Schema } from 'mongoose';
import { UserProp } from '../../types';

const userDetails: Schema = new mongoose.Schema<UserProp>({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model<UserProp>('User', userDetails);
