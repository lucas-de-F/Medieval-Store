import { sign, verify } from 'jsonwebtoken';

type Payload = {
  id: number;
  username: string;
};

const SECRET: any = process.env.JWT_SECRET;
export const generateToken = (payload: Payload) => sign(payload, SECRET);
export const verifyToken = (token: string) => verify(token, SECRET);