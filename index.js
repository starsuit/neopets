const app = require("./src/app");

app.listen(app.get("port"), () => {
  // eslint-disable-next-line no-console
  console.log("We've gone to the port ", app.get("port"));
});
