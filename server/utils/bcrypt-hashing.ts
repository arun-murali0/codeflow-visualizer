import bcrypt from 'bcrypt';

// hashing a password
export const passwordToHash = (password: string) => {
	const saltRound = 10;
	const salt = bcrypt.genSaltSync(saltRound);

	return bcrypt.hashSync(password, salt);
};

// verify password
export const comparePassword = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
