const db = require('./db');

async function main() {
  try {
    // 插入示例
    const newUser = await db.insert('users', {
      name: '李四',
      age: 28,
      email: 'lisi@example.com'
    });
    console.log('新增用户:', newUser);

    // 查询示例
    const users = await db.query('SELECT * FROM users WHERE age > $1', [25]);
    console.log('查询结果:', users);

    // 更新示例
    const updated = await db.update('users', 
      { age: 29 },
      { id: newUser.id }
    );
    console.log('更新结果:', updated);

    // 删除示例
    // const deleted = await db.delete('users', { id: newUser.id });
    // console.log('删除结果:', deleted);
  } finally {
    await db.close();
  }
}

main().catch(console.error);