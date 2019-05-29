const https = require("https");

const request = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let allTheData = "";
        response.on("data", chunk => {
          allTheData += chunk;
        });
        response.on("end", () => {
          try {
            resolve(JSON.parse(allTheData));
          } catch (e) {
            reject(`There was an error with the JSON`);
          }
        });
      })
      .on("error", err => reject(`There was an error: ${err}`));
  });
};

module.exports = request;
