import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './createToken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Token not found' });

  try {
    verifyToken(token);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

export default validateToken;
