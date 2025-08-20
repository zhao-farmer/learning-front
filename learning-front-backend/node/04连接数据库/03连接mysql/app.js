const db = require('./db');

async function main() {
  try {
    // 插入示例
    const insertId = await db.insert('users', {
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com'
    });
    console.log('插入ID:', insertId);

    // 查询示例
    const users = await db.query('SELECT * FROM users WHERE age > ?', [20]);
    console.log('查询结果:', users);

    // 更新示例
    const updated = await db.update('users', 
      { age: 26 }, 
      { id: insertId }
    );
    console.log('更新行数:', updated);

    // 删除示例
    const deleted = await db.delete('users', { id: insertId });
    console.log('删除行数:', deleted);
  } finally {
    await db.close();
  }
}

main().catch(console.error);