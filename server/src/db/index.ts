import mongoose from 'mongoose';
import { config } from '../config';

// database connection
export const databaseConnection = async () => {
	try {
		const connection = await mongoose.connect(config.MONGO_STRING!);
		if (connection) {
			console.info('connection established');
		}
	} catch (error) {
		console.error({ error: error });
		process.exit(1);
	}
};

// shutdown gracefully
process.on('SIGINT', async () => {
	mongoose.disconnect();
	console.info('shutdown gracefully');
	process.exit(0);
});
