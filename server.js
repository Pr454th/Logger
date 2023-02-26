require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const getIds = require("./log/getIds");
const getLogs = require("./log/getLogs");
const logger = require("./log/log");

const app = express();

app.use(express.json());

// get all registered ids
app.use("/ids", getIds);

// get all logs for a id
app.use("/logs/:logId", getLogs);

// log an instance for id
app.use("/log/:logId", logger);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to mongodb");
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
