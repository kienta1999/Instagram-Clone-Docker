const express = require("express");
const cors = require("cors");
const userRouter = require("./route/userRoute.js");
const postRouter = require("./route/postRoute.js");
const debugRouter = require("./middleware/debugRouter.js");
require("dotenv").config();
const db = require("./db/db.js");
const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ app: "instagram :) :)" });
});

app.use("/api", debugRouter);
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
