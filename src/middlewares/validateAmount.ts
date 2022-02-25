import { Request, Response, NextFunction } from 'express';

interface AmountError {
  error: string,
}

function ValidateAmount(
  req: Request,
  res: Response,
  next: NextFunction,
): Response<AmountError> | void {
  const { amount } = req.body;
  if (amount === undefined) {
    return res.status(400).json({ error: 'Amount is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }
  if (amount.length <= 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }

  return next();
}

export default ValidateAmount;
