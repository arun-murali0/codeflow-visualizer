import { z } from 'zod';

export const userValidationSchema = z.object({
	firstName: z.string().min(3, { message: 'firstname should have atleast 3 character' }),
	lastName: z.string().min(3, { message: 'lastname should have atleast 3 character' }),
	userName: z.string().min(3, { message: 'username should have atleast 3 character' }),

	// common
	email: z.string().email({ message: 'email is inValid' }),
	password: z.string().min(8, { message: 'password should have atleast 8 character' }),
});
