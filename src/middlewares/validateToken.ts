import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from './createToken';

interface NewRequest extends Request {
  payload?: JwtPayload;
}

const validateToken = async (req: NewRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Token not found' });

  try {
    const verify = verifyToken(token);
    req.payload = verify as JwtPayload;
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

export default validateToken;
