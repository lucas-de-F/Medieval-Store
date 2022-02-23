import { Request, Response, NextFunction } from 'express';

interface PassError {
  error: string,
}

function validatePassword(
  req: Request,
  res: Response,
  next: NextFunction,
): Response<PassError> | void {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }
  if (password.length <= 7) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  return next();
}

export default validatePassword;
