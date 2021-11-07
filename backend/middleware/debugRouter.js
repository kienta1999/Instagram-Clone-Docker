var express = require("express");
let debugRouter = express.Router();

debugRouter.use((req, res, next) => {
  console.log(`Request type ${req.method}`);
  if (req.method === "POST") {
    console.log(`Request body ${req.body}`);
  }
  next();
});

module.exports = debugRouter;
