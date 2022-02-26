import { ResultSetHeader } from 'mysql2/promise';
import connection from '../models/connection';

export interface IOrder {
  products: string[];
}

export const InsertOrder = async (userId: number): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  const { insertId: id } = result;
  return id;
};

export const Update = async (productId: number, orderId: number): Promise<void> => {
  await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
    [orderId, productId],
  );
};

export const PostOrder = async (orderId: number, products: Array<number>) => {
  products.forEach(async (productId: number): Promise<void> => {
    Update(productId, orderId);
  });
};

export const a = 'a';
