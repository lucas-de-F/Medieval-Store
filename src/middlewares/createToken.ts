import { sign, verify, JwtPayload } from 'jsonwebtoken';

export type Payload = {
  id: number;
  username: string;
};

const SECRET: string = process.env.JWT_SECRET || 'segredo';
export const generateToken = (payload: Payload) => sign(payload, SECRET);

export const verifyToken = (token: string): JwtPayload | string => verify(token, SECRET);