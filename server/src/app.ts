import express from 'express';
import passport from 'passport';

const app = express();

// middleware
app.use(express.json());

// passport
app.use(passport.initialize());
app.use(passport.session());

export { app };
