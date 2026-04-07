const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const db = client.db("fullstack_course");
        const collection = db.collection("students");

        const updateResult = await collection.updateOne(
            { name: "Ruoyu" },
            { $set: { age: 21, course: "MongoDB" } }
        );
        console.log("Updated documents:", updateResult.modifiedCount);

        const deleteResult = await collection.deleteOne({ name: "Bob" });
        console.log("Deleted documents:", deleteResult.deletedCount);
    } catch (err) {
        console.error("Update/Delete error:", err);
    } finally {
        await client.close();
    }
}

run();