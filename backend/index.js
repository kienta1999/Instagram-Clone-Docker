const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const userRouter = require("./route/userRoute.js");
const debugRouter = require("./middleware/debugRouter.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ app: "instagram :) :)" });
});

app.use("/api", debugRouter);
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
