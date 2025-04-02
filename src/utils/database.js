import mysql from 'mysql2';
import 'dotenv/config';  // loads the .env file and makes its variables available in process.env
const config={
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

console.log("config",config)


const pool = mysql.createPool(config);


const promisePool = pool.promise();
export default promisePool;