
const mysql = require('mysql2/promise');

class MySQLClient {
  constructor() {
    this.pool = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: 'testdb',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  // 查询操作
  async query(sql, params) {
    const [rows] = await this.pool.execute(sql, params);
    return rows;
  }

  // 插入操作
  async insert(table, data) {
    const keys = Object.keys(data).join(',');
    const values = Object.values(data);
    const placeholders = values.map(() => '?').join(',');
    const sql = `INSERT INTO ${table}(${keys}) VALUES(${placeholders})`;
    const [result] = await this.pool.execute(sql, values);
    return result.insertId;
  }

  // 更新操作
  async update(table, data, condition) {
    const setClause = Object.keys(data).map(key => `${key}=?`).join(',');
    const values = [...Object.values(data), ...Object.values(condition)];
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${Object.keys(condition)[0]}=?`;
    const [result] = await this.pool.execute(sql, values);
    return result.affectedRows;
  }

  // 删除操作
  async delete(table, condition) {
    const sql = `DELETE FROM ${table} WHERE ${Object.keys(condition)[0]}=?`;
    const [result] = await this.pool.execute(sql, [Object.values(condition)[0]]);
    return result.affectedRows;
  }

  async close() {
    await this.pool.end();
  }
}

module.exports = new MySQLClient();
