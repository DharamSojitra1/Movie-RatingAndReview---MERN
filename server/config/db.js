const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURL = "mongodb://127.0.0.1:27017/movieRating"; 
  mongoose.connect(
    mongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log("MongoDB Connected");
};

module.exports = connectDB;
