const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("testdb");
    const collection = db.collection("users");

    const users = await collection.find().toArray();
    console.log(users);

  } finally {
    await client.close();
  }
}

run();