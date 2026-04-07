const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const db = client.db("fullstack_course");
        const collection = db.collection("practice_users");

        await collection.deleteMany({});

        const insertResult = await collection.insertMany([
            { name: "Anna", age: 20, skill: "NodeJS" },
            { name: "Ben", age: 22, skill: "MongoDB" },
            { name: "Chris", age: 21, skill: "ExpressJS" }
        ]);
        console.log("Inserted:", insertResult.insertedCount);

        const users = await collection.find().toArray();
        console.log("All users:");
        console.log(users);

        const updateResult = await collection.updateOne(
            { name: "Anna" },
            { $set: { age: 23, skill: "Full Stack" } }
        );
        console.log("Updated:", updateResult.modifiedCount);

        const updatedUser = await collection.findOne({ name: "Anna" });
        console.log("Updated user:");
        console.log(updatedUser);

        const deleteResult = await collection.deleteOne({ name: "Chris" });
        console.log("Deleted:", deleteResult.deletedCount);

        const finalUsers = await collection.find().toArray();
        console.log("Final users:");
        console.log(finalUsers);
    } catch (err) {
        console.error("CRUD error:", err);
    } finally {
        await client.close();
    }
}

run();