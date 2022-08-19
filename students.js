const express = require("express");

const studentRouter = express.Router();

const log = (req, res, next) => {
  console.log("New req student at", new Date());
  next();
};

studentRouter.use(log);

const requireApiKey = (req, res, next) => {
  students.forEach((student) => {
    if (req.query.api_key == student.apiKey) {
      req.hasApiKey = true;
      return;
    }
  });
  next();
};

studentRouter.use(requireApiKey);

const students = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

studentRouter.get("/", (req, res) => {
  if (req.hasApiKey) {
    res.json(students);
  } else {
    res.send("Api key is missing!!!");
  }
});

module.exports = studentRouter;
