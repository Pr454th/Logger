const requestIp = require("request-ip");
const axios = require("axios");
const WebLog = require("../models/WebLog");

const logToDb = async (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  const { logId } = req.params;
  const ua = req.get("User-Agent");
  if (clientIp) {
    axios.get(`http://ip-api.com/json/${clientIp}`).then(async (response) => {
      await WebLog.create({ logId, ua, ...response.data });
    });
  }
  res.end();
};

module.exports = logToDb;
