import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("hey there!");
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
