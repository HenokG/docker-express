const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) =>
  res.send(
    "Hello, This app was written with express(NodeJS) and deployed to Heroku using docker for containerized workflow."
  )
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
