import { db } from '../database/connection'

export interface UserDataInDB {
  user_id: number;
  user_name: string;
  email: string;
  password: string; 
}

export interface UserData {
  id?: number;
  userName?: string;
  email: string;
  password?: string;
}

export interface UserRequest {
  name?: string;
  email: string;
  password: string;
}

export interface UserInfoResult {
  results: Array<UserDataInDB>;
  fields: Array<unknown>;
}

const convertItem = (item: UserDataInDB): UserData => {
  return {
    id: item.user_id,
    userName: item.user_name,
    email: item.email,
    password: item.password,
  };
};

export const User = {
  createUser: async (newUser: UserRequest, hashedPassword: string): Promise<number> => {
    const addUser: any = (await db
      .query(`INSERT INTO users 
            ( user_name,email, password) 
            VALUES (?,?,?)`,

        [newUser.name, newUser.email, hashedPassword]) as unknown);
    return addUser.results.insertId
  },

  getUserByEmail: async (userInfo: UserRequest): Promise<UserData> => {
    const userByEmail: UserInfoResult = (await db
      .query(`SELECT * FROM users WHERE email = ?;`,
        [userInfo.email]) as unknown as UserInfoResult);
    if (userByEmail.results.length !== 0) {
      return convertItem(userByEmail.results[0])
    } else {
      return userByEmail.results[0];
    };
  }
};
