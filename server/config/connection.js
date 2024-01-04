const mongoose = require("mongoose");
const { URL_DB } = require("dotenv").config().parsed;

const connect_to_mongodb = async () => {
  await mongoose
    .connect(URL_DB)
    .then(() => console.log("conection is good withe mongo db *_*"))
    .catch(error=>console.log(error))
};
connect_to_mongodb()
