var express = require("express");
let debugRouter = express.Router();

debugRouter.use((req, res, next) => {
  console.log(`Request type ${req.method}`);
  next();
});

module.exports = debugRouter;
