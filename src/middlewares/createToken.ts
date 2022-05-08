import { sign, verify, JwtPayload } from 'jsonwebtoken';

export type Payload = {
  id: number;
  username: string;
};

const SECRET: string = process.env.JWT_SECRET || 'segredo';
class TokenUtils {
  private secret = SECRET;

  generateToken = (payload: Payload) => sign(payload, this.secret);

  verifyToken = (token: string): JwtPayload | string => verify(token, this.secret);
}

export default (new TokenUtils());
