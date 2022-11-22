const WebLog = require("../models/WebLog");

const getLogs = async (req, res) => {
  const { logId } = req.params;
  const logs = await WebLog.find({ logId }).sort({ createdAt: -1 });
  res.json(logs);
};

module.exports = getLogs;
