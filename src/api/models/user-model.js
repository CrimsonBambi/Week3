import promisePool from "../../utils/database.js";

// mock data
/*const userItems = [
    {
        user_id: 3609,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
     },
     {
        user_id: 3608,
        name: 'Vin Diesel',
        username: 'diesel',
        email: 'vin@metropolia.fi',
        role: 'user',
        password: 'password',
     }
  ];*/
  
const listAllUsers = async () => {
  const [rows] = await promisePool.execute(
    'SELECT * FROM wsk_users');
  console.log('rows', rows);
  return rows;
};

const findUserById = async (id) => {
try {
    console.log('Finding user with ID:', id); // Log the ID being searched
  const [rows] = await promisePool.execute(
    'SELECT * FROM wsk_users WHERE user_id = ?',
  [id]
);
  console.log('Query result:', rows); // Log the query result
   if (rows.length === 0) {
      return false; // No user found
   }
   return rows[0]; // Return the user data
  } catch (error) {
    console.error('Error in findUserById:', error.message); // Log any errors
    throw error; // Rethrow the error to be handled by the caller
  }
};

const addUser = async (user) => {
  const {name, username, email, password, role} = user;
  const sql = `INSERT INTO wsk_users (name, username, email, password, role)
              VALUES (?, ?, ?, ?, ?)`;
  const params = [name, username, email, password, role];
  const rows = await promisePool.execute(sql, params);
  console.log('rows', rows);
  if (rows[0].affectedRows === 0) {
    return false;
  }
  return {user_id: rows[0].insertId};
};

const putUserById = async (user, id) => {
  const sql = promisePool.format(`UPDATE wsk_users SET ? WHERE user_id = ?`, 
    [user, id,]);
    const rows = await promisePool.execute(sql);
    console.log('rows', rows);
     if (rows.affectedRows === 0) {
        return false;
     }
     return {message: 'success'};
  };

const deleteUserById = async (id) => {
  const [rows] = await promisePool.execute('DELETE FROM wsk_users WHERE user_id = ?', [id]);
  console.log('rows', rows);
   if (rows.affectedRows === 0) {
      return false;
   }
   return {message: 'success'};
  };

export { listAllUsers, findUserById, addUser, putUserById, deleteUserById};