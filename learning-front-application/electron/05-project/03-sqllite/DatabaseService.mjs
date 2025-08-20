import sqlite3 from 'sqlite3';
import { app } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

class DatabaseService {
  constructor() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    this.dbPath = path.join(app.getPath('userData'), 'appdata.db');
    this.db = new sqlite3.Database(this.dbPath);
    this.initTables();
  }

  initTables() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  async query(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        err ? reject(err) : resolve(rows);
      });
    });
  }

  async insert(table, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => '?').join(',');
    const sql = `INSERT INTO ${table} (${keys.join(',')}) VALUES (${placeholders})`;
    return this.query(sql, values);
  }

  async update(table, data, condition) {
    const setClause = Object.keys(data)
      .map(key => `${key} = ?`)
      .join(',');
    const values = [...Object.values(data), ...condition.values];
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${condition.sql}`;
    return this.query(sql, values);
  }

  async delete(table, condition) {
    const sql = `DELETE FROM ${table} WHERE ${condition.sql}`;
    return this.query(sql, condition.values);
  }
}

export default new DatabaseService();