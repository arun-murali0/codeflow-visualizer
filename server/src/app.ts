import express from 'express';
import { databaseConnection } from './db';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

databaseConnection();

export { app };
