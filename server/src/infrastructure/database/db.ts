import mongoose from 'mongoose';
import { config } from '../../config/config';

// primaty database
export const databaseConnection = async (): Promise<void> => {
	try {
		const connection = await mongoose.connect(config.MONGO_STRING!);
		if (connection) {
			console.info('database connected');
		}
	} catch (error) {
		console.error({ error: error });
		process.exit(1);
	}
};

// gracefull shutdown
process.on('SIGINT', async () => {
	mongoose.disconnect();
	console.info('system shutdown gracefully');
	process.exit(0);
});
