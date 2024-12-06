import express from 'express';
import passport from 'passport';
import Routes from './interface-adapter/routes/routes';
const app = express();

// middleware
app.use(express.json());

// passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', Routes);

export { app };
