const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const controllers = require("./controllers/index");

const app = express();

app.disable("x-powered-by");
app.set("port", process.env.PORT || 7000);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(controllers);

module.exports = app;
