const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const db = client.db("fullstack_course");
        const collection = db.collection("students");

        const allStudents = await collection.find().toArray();
        console.log("All students:");
        console.log(allStudents);

        const oneStudent = await collection.findOne({ name: "Ruoyu" });
        console.log("One student:");
        console.log(oneStudent);

        const filteredStudents = await collection.find({ age: { $gte: 21 } }).toArray();
        console.log("Students age 21 or above:");
        console.log(filteredStudents);
    } catch (err) {
        console.error("Find error:", err);
    } finally {
        await client.close();
    }
}

run();