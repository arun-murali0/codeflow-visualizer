import { app } from './app';

import { config } from './config/config';

app.listen(config.PORT, () => {
	console.info(`server running in http://localhost:${config.PORT}`);
});
