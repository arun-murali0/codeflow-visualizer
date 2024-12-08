import express from 'express';
import { databaseConnection } from './db';
import Routes from './routes';
import passport from 'passport';
import session from 'express-session';
const app = express();
import { config } from './config';
import { errorHandler } from './utils/errorHandler';

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		secret: config.SECRET!,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 60 * 60 * 24 },
	})
);

// db
databaseConnection();

// passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/api', Routes);

// error handler
app.use(errorHandler);

export { app };
