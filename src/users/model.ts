import { ResultSetHeader } from 'mysql2';
import connection from '../models/connection';
import { IUser, User } from './IUser';

class UserModel {
  constructor(private connect = connection) {
    this.postUser = this.postUser.bind(this);
  }

  async postUser(user: IUser): Promise<User> {
    const { username, classe, level, password } = user;
    
    const [result] = await this.connect.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
      
    const { insertId: id } = result;

    const insertedUser: User = {
      id, username, classe, level, password,
    };

    return insertedUser;
  }
}

export default (new UserModel());
