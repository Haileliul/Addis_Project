// index.js
const express = require("express");
const connectDB = require("./src/config/dbConfig");
const app = express();
const port = process.env.PORT || 3001;

// Define your routes here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// First, connect to the database, then start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App running http://localhost:${port + 1}`);
    });
  })
  .catch((error) => {
    console.error("Server not started due to DB connection error:", error);
  });
