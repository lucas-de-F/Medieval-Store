import express from 'express';
import users from './router/index';

const app = express();

app.use(express.json());
app.use('/users', users);

export default app;
