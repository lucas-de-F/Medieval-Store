import { ResultSetHeader } from 'mysql2';
import { IProduct, Product } from './Iproduct';
import connection from '../models/connection';

export const PostProduct = async (product: IProduct): Promise<Product> => {
  const { amount, name, orderId } = product;
  
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;

  return { id, name, amount, orderId };
};

export const getProducts = async (): Promise<any> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Trybesmith.Products',
  );

  return result;
};
