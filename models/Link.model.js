const { Schema, model } = require("mongoose");

const schema = new Schema({
  shortUrl: { type: String, required: true },
  originalUrl: { type: String, required: true }
});

module.exports = model("Link", schema);
