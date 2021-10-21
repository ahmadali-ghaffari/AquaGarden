import mysql from 'mysql2';

import { dbConnection } from '../config';

const pool = mysql.createPool({
  connectionLimit: 2,
  host: dbConnection.mysql.host,
  user: dbConnection.mysql.user,
  password: dbConnection.mysql.password,
  database: dbConnection.mysql.database,
  insecureAuth: true,
});

const query = (queryString: string, values?: any[]): Promise<unknown> =>
  new Promise((resolve, reject) => {
    pool.query(queryString, values, (err, results) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

export const db = {
  query(query: string, values?: Array<unknown>): Promise<unknown> {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, results, fields) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve({ results, fields });
        }
      });
    });
  },
};

pool.getConnection((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});
