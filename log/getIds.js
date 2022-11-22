const WebLog = require("../models/WebLog");

const getIds = async (req, res) => {
  const ids = await WebLog.find({}, "logId");
  const uniqueIds = [];
  ids.forEach((id) => {
    if (!uniqueIds.includes(id["logId"])) uniqueIds.push(id["logId"]);
  });
  res.json(uniqueIds);
};

module.exports = getIds;
