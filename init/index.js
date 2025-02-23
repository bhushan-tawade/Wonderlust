const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const main = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB!");

    // Initialize the database
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data saved!");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // Close the connection after operation
    mongoose.connection.close();
  }
};

main();
