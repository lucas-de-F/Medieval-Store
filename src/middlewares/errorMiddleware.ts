import { Request, Response, NextFunction } from 'express';
import errorClass from './errorClass';

const errorMiddleware = (err: errorClass, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status).json({ error: err.message });
};

export default errorMiddleware;