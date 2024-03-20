const express = require("express");
const mongoose = require("mongoose");
const coursesRouter = require('./Router/courseRouter');
const userRouter = require('./Router/user');
mongoose.connect("mongodb://localhost:27017/Coures", (err) => {
  if (err) {
    console.log("There is error to connect the database", err.message);
  } else {
    console.log("Databas is connected");
  }
});
const app = express();

app.use("/courses", coursesRouter);
app.use('/users', userRouter)
app.use(express.json());

app.use((req, res, next) => {
  res.send("It is not supported");
});
app.use((err, req, res, next) => {
  if (err && err.message) {
    res.send(err.message);
  } else res.send("Error");
});
app.listen(3000, console.log("3000 port is listening"));
