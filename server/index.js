const express = require("express");

const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("Your Express API is up and running!");
});

app.use(express.json());

app.listen(port);
