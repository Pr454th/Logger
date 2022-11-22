const mongoose = require("mongoose");

const webLogSchema = mongoose.Schema(
  {
    logId: String,
    ua: String,
    status: String,
    country: String,
    countryCode: String,
    region: String,
    regionName: String,
    city: String,
    zip: String,
    lat: String,
    lon: String,
    timezone: String,
    isp: String,
    org: String,
    as: String,
    query: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("WebLog", webLogSchema);
