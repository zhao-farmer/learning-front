
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: '123456',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000
});

class PgClient {
  async query(sql, params) {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, params);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async insert(table, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map((_,i) => `$${i+1}`).join(',');
    const sql = `INSERT INTO ${table}(${keys.join(',')}) VALUES(${placeholders}) RETURNING *`;
    return (await this.query(sql, values))[0];
  }

  async update(table, data, condition) {
    const setClause = Object.keys(data).map((k,i) => `${k}=$${i+1}`).join(',');
    const whereClause = Object.keys(condition).map((k,i) => `${k}=$${i+1+Object.keys(data).length}`);
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${whereClause} RETURNING *`;
    return (await this.query(sql, [...Object.values(data), ...Object.values(condition)]))[0];
  }

  async delete(table, condition) {
    const whereClause = Object.keys(condition).map((k,i) => `${k}=$${i+1}`);
    const sql = `DELETE FROM ${table} WHERE ${whereClause} RETURNING *`;
    return (await this.query(sql, Object.values(condition)))[0];
  }

  async close() {
    await pool.end();
  }
}

module.exports = new PgClient();
