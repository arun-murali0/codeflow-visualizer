import express from 'express';
import { databaseConnection } from './db';
import Routes from './routes';
import passport from 'passport';
import session from 'express-session';
const app = express();
import { config } from './config';

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

// passport
app.use(passport.session());
app.use(passport.initialize());

// db
databaseConnection();

// routes
app.use('/api', Routes);

export { app };
