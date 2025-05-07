const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.Database_URL)
      .then(() => {
        console.log("Database connection Successfull");
      })
      .catch((error) => {
        console.log("Database connection successful");
        console.error(error);
      });
  }
}

module.exports = new Database();
