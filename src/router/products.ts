import { Router } from 'express';
// import rescue from 'express-rescue';

import {
  validateToken,
} from '../middlewares';

const products = Router();

products.post(
  '/',
  validateToken,
);

export default products;
