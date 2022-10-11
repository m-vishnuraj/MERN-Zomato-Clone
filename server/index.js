import express from "express";
import dotenv from "dotenv";

// Database Connection
import connectDB from "./database/connection";

dotenv.config();

const zomato = express();


zomato.use(express.json());

zomato.get("/", (req, res) => {
    return res.json({
        message: "Server is running",
    });
});

const PORT = 4000;

zomato.listen(PORT, () => {
  connectDB()
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
    })
    .catch((error) => {
      console.log('Server is running but database connection failed...');
      console.log(error);
    });
  // console.log(`Server is running on port ${PORT}`);
});
