const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

// app.post("/login", (req, res) => {
//   const user = login();
//   const token = jwt.sign({ username: user.username }, "PRIVATE_KEY");
//   res.json({ user: user, token: token });
// });

// app.post("/students", (req, res) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, "PRIVATE_KEY");
//     if (decoded) {
//       res.json(students);
//     }
//   } catch (err) {
//     res.status(401).send("Invalid Token");
//   }
// });

const jwtMdw = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, "PRIVATE_KEY");
    if (decoded) {
      req.username = decoded.username;
      next();
    }
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};

app.post("/students", jwtMdw, (req, res) => {
  console.log(req.username);
  res.json(students);
});

app.get("/", (req, res) => {
  res.json({ name: "Huy", age: 20 });
});

app.listen("8000", (req, res) => {
  console.log("Server is running ... ");
});
