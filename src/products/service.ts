import { IProduct, Product } from './Iproduct';
import * as model from './model';

export const PostProduct = async (product: IProduct): Promise<Product> => {
  const postProduct: Product = await model.PostProduct(product);

  return postProduct;
};

export const getProducts = async (): Promise<Product[]> => {
  const products = await model.getProducts();

  return products;
};
