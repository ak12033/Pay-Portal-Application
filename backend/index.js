const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRouter = require("./routes/index");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword.....

// /api/v1/account/transferMoney
// /api/v1/account/balance

//database
const connectDB = async () => {

  mongoose.connection.on('connected', () => console.log("Database Connected"));
  
  await mongoose.connect(`${process.env.MONGO_URL}/paytm`);
};

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server is running on port: " + process.env.PORT);
});