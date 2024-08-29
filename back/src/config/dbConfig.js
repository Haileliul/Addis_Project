require("dotenv").config();
const mongoose = require("mongoose");

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://${dbUsername}:${dbPassword}@music.sror1.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=music`;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    mongoose.connection.once("open", async () => {
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  } finally {
    // Comment out the disconnect if this is an application that runs continuously
    // await mongoose.disconnect();
  }
}

connectDB().catch(console.dir);

module.exports = connectDB;
