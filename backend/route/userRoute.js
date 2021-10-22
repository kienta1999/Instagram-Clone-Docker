const express = require("express");
const router = express.Router();
const { addUser, User } = require("../model/user.js");

router.use("/user/:id", (req, res, next) => {
  console.log(`User id: ${req.params.id}`);
  next();
});

router.get("/user/:id", async (req, res, next) => {
  const id = req.params.id;
  const user = new User(id);
  try {
    const userInfor = await user.getUser();
    res.json(userInfor);
  } catch (error) {
    res.json(error);
  }
});

router.post("/user", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    await addUser(username, password);
  } catch (error) {
    res.json(error);
  }
  res.json({ username, password });
});

module.exports = router;
