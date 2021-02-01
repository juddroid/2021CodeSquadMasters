module.exports = {
  getPC: () => 'SELECT pc_no FROM PC WHERE status = 0',
  getUser: (pc_no) => `SELECT user FROM HISTORY where pc_no = ${pc_no}`,
  getPC_NUM: (user) => `SELECT pc_no FROM HISTORY where user = ${user}`,
  getHistory: () => `SELECT * FROM HISTORY`,
  updateState: (pc_no, status) => `UPDATE PC SET status = ${status} WHERE pc_no = ${pc_no}`,
  insertHistory: (pc_no) => `INSERT INTO HISTORY (pc_no, start) VALUES ('${pc_no}', now())`,
  updateHistory: (user) => `UPDATE HISTORY SET end = now() WHERE user = ${user}`,
  endPC: (pc_no, status) => `UPDATE PC SET status = ${status} WHERE pc_no = ${pc_no}`,
};
