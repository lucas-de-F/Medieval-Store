import { Router } from 'express';
import rescue from 'express-rescue';

import {
  validateToken,
  ValidateProductName,
  ValidateAmount,
} from '../middlewares';
import { PostProduct, GetProducts } from '../products/controller';

const products = Router();

products.post(
  '/',
  validateToken,
  ValidateProductName,
  ValidateAmount,
  rescue(PostProduct),
);

products.get('/', validateToken, rescue(GetProducts));

export default products;
