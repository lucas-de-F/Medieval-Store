import express from 'express';
import dotenv from 'dotenv';
import { users, login, products, orders } from './router/index';
import errorMiddleware from './middlewares/errorMiddleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/users', users);
app.use('/login', login);
app.use('/products', products);
app.use('/orders', orders);
app.use(errorMiddleware);

export default app;
