const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("testdb");
    const collection = db.collection("users");

    await collection.insertOne({
      name: "Ruoyu",
      age: 20
    });

    console.log("Data inserted");

  } finally {
    await client.close();
  }
}

run();