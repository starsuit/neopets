//Import Node modules
const express = require("express");

const router = express.Router();
const data = require("../utils/neoData.json");

//Import error functions
const error = require("./error");

router.get("/", (req, res) => {
  res.send("hi");
});

router.get("/api/", (req, res) => {
  const { search } = req.query;
  let result = [];
  if (!search) result = data;
  else {
    if (typeof search === "number") {
      result = data.filter(pet => pet.id === search);
    } else {
      result = data.filter(pet => pet.name === search);
    }
  }
  res.json(result);
});

//Error handling

router.use(error.missing);
router.use(error.server);

module.exports = router;
