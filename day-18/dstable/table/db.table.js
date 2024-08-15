const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function createCollections() {
  try {
    await client.connect();
    const db = client.db('project5');

    await db.createCollection('department');
    await db.createCollection('user');

    console.log("Collections created if they didn't exist");
  } finally {
    await client.close();
  }
}

createCollections().catch(console.error);
