import { ResultSetHeader } from 'mysql2';
import connection from '../models/connection';

class LoginModel {
  constructor(private connect = connection) {}

  async findUserName(username: string): Promise<string[]> {
    const [result]: any = await this.connect.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?;',
      [username],
    );
  
    return result;
  }

  async findPassWord(username: string, password: string): Promise<any> {
    const [result]: any = await this.connect.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?;',
      [username, password],
    );
  
    return result;
  }
}

export default (new LoginModel());
