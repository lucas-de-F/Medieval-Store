import { Router } from 'express';
import rescue from 'express-rescue';

import {
  validateToken, ValidateProducts,
} from '../middlewares';
import PostOrder from '../orders/controller';

const orders = Router();

orders.post(
  '/',
  validateToken,
  ValidateProducts,
  rescue(PostOrder),
);

export default orders;
