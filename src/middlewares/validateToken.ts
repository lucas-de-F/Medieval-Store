import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from './createToken';
import CustomError from './errorClass';

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
    if (e instanceof jwt.JsonWebTokenError) {
      return next(new CustomError('Invalid token', 401));
    }
  }
  next();
};

export default validateToken;
