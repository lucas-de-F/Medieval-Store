import express from 'express';
import dotenv from 'dotenv';
import users from './router/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/users', users);

export default app;
