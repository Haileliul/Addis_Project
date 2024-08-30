// index.js
const express = require("express");
const connectDB = require("./src/config/dbConfig");
const cors = require("cors");
const songrouter = require("./src/Routes/SongRouter");

const app = express();
const port = process.env.PORT || 3000;

// app.use(
//   cors({
//     origin: ["https://addis-project-frontend.onrender.com"], // Allow requests from your frontend's origin
//     methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
//     credentials: true, // Allow cookies and credentials to be sent
//   })
// );

// Configure CORS to allow requests from all origins
app.use(cors()); // This will allow all origins by default

// middlewares

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
