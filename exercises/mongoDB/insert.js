const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const db = client.db("fullstack_course");
        const collection = db.collection("students");

        const result = await collection.insertMany([
            { name: "Ruoyu", age: 20, course: "NodeJS" },
            { name: "Alice", age: 22, course: "MongoDB" },
            { name: "Bob", age: 21, course: "ExpressJS" }
        ]);

        console.log("Inserted documents:", result.insertedCount);
    } catch (err) {
        console.error("Insert error:", err);
    } finally {
        await client.close();
    }
}

run();