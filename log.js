const log = (req, res, next) => {
  console.log("New req at", new Date());
  next();
};

module.exports = log;
