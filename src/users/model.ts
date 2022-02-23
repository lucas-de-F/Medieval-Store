import { ResultSetHeader } from 'mysql2';
import connection from '../models/connection';
import { IUser, User } from './IUser';

export const a = () => {};

export const postUser = async (user: IUser): Promise<User> => {
  const {
    username, classe, level, password,
  } = user;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = result;

  const insertedUser: User = {
    id, username, classe, level, password,
  };

  return insertedUser;
};
