import { User, UserRequest } from "../models/User";
import { dbConnection } from '../config';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const loginService = async (reqBody: UserRequest): Promise<any> => {

  if (!reqBody.email && !reqBody.password) {
    throw 'All fields are required.';
  } else if (!reqBody.email) {
    throw 'Email is required.';
  } else if (!reqBody.password) {
    throw 'Password is required.';
  }

  let userByEmail = await User.getUserByEmail(reqBody);

  if (userByEmail === undefined) {
    throw 'such a user does not Exist!';
  }

  let savedPassword = userByEmail.password as string;
  let matchPasswords = await bcrypt.compare(reqBody.password, savedPassword);

  const user = {
    id: userByEmail.id,
    name: userByEmail.userName,
    email: userByEmail.email,
  }

  let jwtoken: string = '';

  if (matchPasswords === true) {
    jwtoken = jwt.sign(
      { user },
      `${dbConnection.token.key}`,
      { expiresIn: '1h' }
    )
  } else {
    throw 'password is incorrect.';
  }

  let result = {
    'status': "ok",
    'token': jwtoken
  }
  return result
}
