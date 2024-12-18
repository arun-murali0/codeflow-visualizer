import express from 'express';
import { databaseConnection } from './db';
import Routes from './routes';
import passport from 'passport';
import session from 'express-session';

const app = express();
import { config } from './config';
import { errorHandler } from './middlewares/errorHandler';

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session
app.use(
	session({
		secret: config.SECRET!,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 60 * 60 * 24 },
	})
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// db
databaseConnection();

// routes
app.use('/api', Routes);

// error Handler
app.use(errorHandler);

export { app };
