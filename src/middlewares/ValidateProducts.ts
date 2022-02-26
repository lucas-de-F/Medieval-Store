import { Request, Response, NextFunction } from 'express';
import ErrorClass from './errorClass';

function ValidateProducts(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  const { products } = req.body;
  if (!products) {
    throw new ErrorClass('Products is required', 400);
  }
  if (!Array.isArray(products) 
  || products.some((product: string | number) => typeof product !== 'number')) {
    throw new ErrorClass('Products must be an array of numbers', 422);
  }
  if (products.length === 0) {
    throw new ErrorClass('Products can\'t be empty', 422);
  }

  return next();
}

export default ValidateProducts;
