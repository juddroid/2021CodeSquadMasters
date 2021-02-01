const mysql = require('mysql2/promise');

const dbUserInfo = require('./db_user_info.js');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'raccoon',
  password: 'raccoondb',
  database: 'pc_cafe_db',
});

// const dbTest = async () => {
//   try {
//     const connection = await pool.getConnection(async (conn) => conn);
//     try {
//       /* Step 3. */

//       const [rows] = await connection.query('select * from PC;');
//       connection.release();
//       return rows;
//     } catch (err) {
//       console.log('Query Error');
//       connection.release();
//       return false;
//     }
//   } catch (err) {
//     console.log('DB Error');
//     return false;
//   }
// };

// console.log(dbTest());

console.log(mysql.createPool(dbUserInfo).getConnection(());
