import dotenv from 'dotenv';
dotenv.config();

export const config = {
	PORT: process.env.PORT,
	SECRET: process.env.SECRET,
	MONGO_STRING: process.env.MONGO_STRING,
};
