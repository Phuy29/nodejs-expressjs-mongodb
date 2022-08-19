const express = require("express");
const app = express();

const studentRouter = require("./students.js");

const log = require("./log.js");

const requireApiKey = (req, res, next) => {
  if (!req.query.api_key) {
    res.send("Api key is missing!!!");
    return;
  }
  next();
};

app.use("/student", studentRouter);

app.use(log);

app.get("/", requireApiKey, (req, res) => {
  res.send("Trang chủ");
});

app.get(
  "/teacher",
  (req, res, next) => {
    console.log("Teacher API");
    next();
  },
  (req, res, next) => {
    console.log("Teacher API 2");
    next();
  }
);

app.get("/teacher", (req, res) => {
  res.json({ name: "Huy", age: 20 });
});

app.listen("8000", () => {
  console.log("Server is running ... ");
});
