
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'testdb';

class MongoDB {
  constructor() {
    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db(dbName);
    console.log('Connected to MongoDB');
  }

  // 插入文档
  async insert(collectionName, data) {
    const collection = this.db.collection(collectionName);
    return await collection.insertOne(data);
  }

  // 查询文档
  async find(collectionName, query = {}) {
    const collection = this.db.collection(collectionName);
    return await collection.find(query).toArray();
  }

  // 更新文档
  async update(collectionName, filter, updateData) {
    const collection = this.db.collection(collectionName);
    return await collection.updateOne(filter, { $set: updateData });
  }

  // 删除文档
  async delete(collectionName, filter) {
    const collection = this.db.collection(collectionName);
    return await collection.deleteOne(filter);
  }

  async close() {
    await this.client.close();
  }
}

module.exports = new MongoDB();