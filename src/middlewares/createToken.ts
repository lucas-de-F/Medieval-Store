const jwt = require('jsonwebtoken');

export interface IToken {
    token: string
}

export function generateToken({ username }: { username: string }): IToken {
  const jwtOptions = {
    algorithm: 'HS256',
    subject: username,
    expiresIn: '1h',
  };

  const payload = {
    username,
    isAdimin: false,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);

  return { token };
}
