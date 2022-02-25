import { Request, Response, NextFunction } from 'express';

interface NameError {
  error: string,
}

function ValidateProductName(
  req: Request,
  res: Response,
  next: NextFunction,
): Response<NameError> | void {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }
  if (name.length <= 2) {
    return res.status(422).json({ error: 'Name must be longer 2 characters' });
  }

  return next();
}

export default ValidateProductName;
