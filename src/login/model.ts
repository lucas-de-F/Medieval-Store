import { ResultSetHeader } from 'mysql2';
import connection from '../models/connection';

export const findUserName = async (username: string): Promise<string[]> => {
  const [result]: any = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Users WHERE username = ?;',
    [username],
  );

  return result;
};

export const findPassWord = async (username: string, password: string): Promise<any> => {
  const [result]: any = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Users WHERE username = ? AND password = ?;',
    [username, password],
  );

  return result;
};
