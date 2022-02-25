import { Request, Response } from 'express';
import { IProduct } from './Iproduct';
import * as service from './service';

export const PostProduct = async (req: Request, res: Response): Promise<void> => {
  const product: IProduct = req.body;

  const postProduct = await service.PostProduct(product);

  res.status(201).json({ item: postProduct });
};

export const GetProducts = async (req: Request, res: Response): Promise<void> => {
  const getProducts = await service.getProducts();
  res.status(201).json(getProducts);
};
