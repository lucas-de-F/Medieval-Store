import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

export const getProducts = async (): Promise<RowDataPacket> => {
  const [resolve] = await connection
    .query('SELECT * FROM Trybesmith.Products') as RowDataPacket[];

  return resolve;
};
