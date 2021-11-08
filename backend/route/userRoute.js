const express = require("express");
const router = express.Router();
const { createUser, loginUser, getUser } = require("./../service/userService");
const { usernameExisted, wrongUserInfor } = require("./../service/errors.js");

// router.use("/user/:id", (req, res, next) => {
//   console.log(`User id: ${req.params.id}`);
//   next();
// });

router.get("/user/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await getUser(id);
    res.json(user);
  } catch (error) {}
});

router.post("/register", async (req, res, next) => {
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

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userInfor = await loginUser(username, password);
    res.status(200).json(userInfor);
  } catch (error) {
    if (error == wrongUserInfor) {
      res.status(400).json({ success: false, message: wrongUserInfor });
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
});

module.exports = router;
