import express from 'express';
import dotenv from 'dotenv';
import { users, login, products } from './router/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/users', users);
app.use('/login', login);
app.use('/products', products);

export default app;
