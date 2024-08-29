// index.js
const express = require("express");
const connectDB = require("./src/config/dbConfig");
const cors = require("cors");
const songrouter = require("./src/Routes/SongRouter");

const app = express();
const port = process.env.PORT || 3001;

var corOptions = {
  origin: "https://localhost:3001",
};

//middlewares

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Define your routes here
app.use("/api/Song", songrouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
