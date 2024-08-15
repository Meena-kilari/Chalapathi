const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('project5');
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
