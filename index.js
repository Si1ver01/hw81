const express = require("express");
const mongoose = require("mongoose");

const linkRoute = require("./routes/link.route");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/", linkRoute);

const start = async () => {
  await mongoose.connect("mongodb://localhost/shortUrl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  console.log(`MongoDb connected`);

  app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
  });
};

start();
