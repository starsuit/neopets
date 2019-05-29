const missing = (req, res) => {
  res.status(404).send("404");
};

// eslint-disable-next-line no-unused-vars
const server = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).send("500");
};

module.exports = {
  missing,
  server
};
