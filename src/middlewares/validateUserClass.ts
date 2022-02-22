import { Request, Response, NextFunction } from 'express';

interface error {
  error: string,
}

function validateClass(req: Request, res: Response, next: NextFunction): Response<error> | void {
  const { classe } = req.body;
  if (!classe) {
    return res.status(400).json({ error: 'Classe is required' });
  }
  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }
  if (classe.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  return next();
}

export default validateClass;
