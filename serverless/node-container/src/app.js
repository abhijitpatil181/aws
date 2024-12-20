const express = require("express");
const dotenv = require("dotenv");

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: envFile });

const PORT = process.env.PORT || 8001;

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json("Server is up and running !");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
