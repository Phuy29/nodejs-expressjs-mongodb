const express = require("express");
const studentRouter = express.Router();

const log = require("./log.js");

const requireApiKey = (req, res, next) => {
  if (req.query.api_key) {
    req.hasApiKey = true;
  }
  next();
};

studentRouter.use(log);

const student = [
  {
    name: "Bob",
    age: 11,
  },
  {
    name: "Alice",
    age: 10,
  },
  {
    name: "Bin",
    age: 10,
  },
];

studentRouter.get("/", requireApiKey, (req, res) => {
  if (req.hasApiKey) {
    res.json(student);
  } else {
    res.send("Api key is missing");
  }
});

studentRouter.get("/add", (req, res) => {
  student.push({ name: "Huy", age: 19 });
});

studentRouter.get("/:id/class/:classId", (req, res) => {
  res.send(req.params);
});

studentRouter.get("/search", (req, res) => {
  res.send(req.query);
});

module.exports = studentRouter;
