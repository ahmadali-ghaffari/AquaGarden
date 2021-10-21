import * as dotenv from 'dotenv';

dotenv.config();

export const port = Number(process.env.PORT)

export const dbConnection = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  token: {
    key: process.env.TOKEN_KEY,
  },
};
