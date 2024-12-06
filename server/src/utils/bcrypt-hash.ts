import bcrypt from 'bcrypt';

// password hashing
export const password_to_hash = (password: string) => {
	let salt = 10;
	const saltRound = bcrypt.genSaltSync(salt);
	return bcrypt.hashSync(password, saltRound);
};

// verfiy password
export const verify_hashed_password = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
