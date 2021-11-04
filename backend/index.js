const express = require("express");
const cors = require("cors");
const userRouter = require("./route/userRoute.js");
const debugRouter = require("./middleware/debugRouter.js");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./db/mysqlInit.js");

app.get("/", (req, res) => {
  res.json({ app: "instagram :) :)" });
});

app.use("/api", debugRouter);
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
