import Routes from './routes';

import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', Routes);

export { app };
