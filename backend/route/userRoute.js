const express = require("express");
const router = express.Router();
const { createUser } = require("./../service/userService");
const { usernameExisted } = require("./../service/errors.js");

router.use("/user/:id", (req, res, next) => {
  console.log(`User id: ${req.params.id}`);
  next();
});

router.get("/user/:id", async (req, res, next) => {
  const id = req.params.id;
  res.send(`User id: ${id}`);
});

router.post("/user", async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    await createUser(username, password, email);
    res.status(200).json({ success: true });
  } catch (error) {
    if (error == usernameExisted) {
      res.status(400).json({ success: false, message: usernameExisted });
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
});

module.exports = router;
