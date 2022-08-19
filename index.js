const express = require("express");
const app = express();

const studentRouter = require("./students.js");

app.use("/student", studentRouter);

const log = (req, res, next) => {
  console.log("New req app at", new Date());
  next();
};

app.use(log);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen("8000", (req, res) => {
  console.log("Server is running ...");
});
