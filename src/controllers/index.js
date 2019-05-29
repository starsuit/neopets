//Import Node modules
const express = require("express");

const router = express.Router();
const data = require("../utils/neoData.json");

//Import error functions
const error = require("./error");

router.get("/", (req, res, next) => {
  console.log("hi");
  res.send("hi");
});

router.get("/api/", (req, res, next) => {
  const { search, key } = req.query;
  let result = [];
  if (key !== "sylvia") res.send("requires key");
  else {
    if (typeof search === "number") {
      result = data.filter(pet => pet.id === search);
    } else {
      result = data.filter(pet => pet.name === search);
    }
    if (result.length === 0) res.send("no data");
    else res.json(result);
  }
});

//Error handling

router.use(error.missing);
router.use(error.server);

module.exports = router;
