db = require('./db');

async function main() {
  try {
    await db.connect();
    
    // 插入
    await db.insert('users', { name: 'zhangsan', age: 25 });
    await db.insert('users', { name: 'lisi', age: 25 });
    await db.insert('users', { name: 'wangwu', age: 25 });
    
    
    // 查询
    const users = await db.find('users');
    console.log(users);
    
    // 更新
    await db.update('users', { name: 'lisi' }, { age: 26 });
    
    // 删除
    await db.delete('users', { name: 'wangwu' });
  } finally {
    await db.close();
  }
}

main().catch(console.error);