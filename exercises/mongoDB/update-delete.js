const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("testdb");
    const collection = db.collection("users");

    await collection.updateOne(
      { name: "Ruoyu" },
      { $set: { age: 21 } }
    );

    console.log("Updated");

    await collection.deleteOne({ name: "Ruoyu" });

    console.log("Deleted");

  } finally {
    await client.close();
  }
}

run();