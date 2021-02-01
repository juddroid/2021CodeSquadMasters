const mysql = require('mysql2/promise');
const dbUserInfo = require('./db_user_info');
const pool = mysql.createPool(dbUserInfo);
const { log } = console;

const db = {
  execute: async (query) => {
    try {
      const connection = await pool.getConnection(async (conn) => conn);
      try {
        const [list] = await connection.query(query);
        connection.release();
        return list.map((el) => el.pc_no);
      } catch (err) {
        log('Query Error');
        connection.release();
        return false;
      }
    } catch (err) {
      log('DB Error');
      return false;
    }
  },
  update: async (query) => {
    try {
      const connection = await pool.getConnection(async (conn) => conn);
      try {
        const [list] = await connection.query(query);
        connection.release();
        return list;
      } catch (err) {
        log('Query Error');
        connection.release();
        return false;
      }
    } catch (err) {
      log('DB Error');
      return false;
    }
  },
};

module.exports = db;
