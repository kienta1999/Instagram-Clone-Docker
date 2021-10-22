const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ app: "instagram :) :)" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
