import { User, UserData, UserRequest } from '../models/User';
import bcrypt from "bcrypt";

const saltRounds = 7;
const hashedPassword = async (password: string, saltRounds: number): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
}

export const userService = async (regBody: UserRequest): Promise<UserData> => {

  if (!regBody.email && !regBody.name && !regBody.password) {
    throw 'Name, email and password are required.';
  } else if (!regBody.email) {
    throw 'Email is required.';
  } else if (!regBody.name) {
    throw 'Name is required.';
  } else if (!regBody.password) {
    throw 'Password is required.';
  } else if (regBody.password.length < 8) {
    throw 'Password must be at least 8 characters.';
  }

  const hashedPass: string = await hashedPassword(regBody.password, saltRounds);

  const userFromDB: UserData = await User.getUserByEmail(regBody)
  if (userFromDB) {
    throw 'Email is already taken';
  } else {
    const userId: number = await User.createUser(regBody, hashedPass);
    return {
      id: userId,
      email: regBody.email,
    }
  }
}
