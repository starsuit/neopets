const request = require("./src/utils/request");
const data = require("./src/utils/neoData.json");

let neoNames;
let neoDirectory;

const getNeoPics = (id, name) => {
  console.log(id);
  request(
    `https://neopets.fandom.com/api.php?format=json&action=imageserving&wisId=${id}`
  )
    .then(response => response.image.imageserving)
    .then(response => console.log({ id, name, response }));
  // .catch(console.log("oops"));
};

const getNeoData = name => {
  request(
    `https://neopets.fandom.com/api.php?format=json&action=imageserving&titles=${name}`
  )
    .then(response => {
      return response.items.map(item => {
        return { name: item.title, id: item.id };
      });
    })
    .then(directory => {
      directory.map(pet => {
        getNeoPics(pet.id, pet.name);
      });
      console.log(neoDirectory);
      return;
    })
    .catch(console.log("oops"));
};

const neoImages = data.map(pet => {
  getNeoPics(pet.id, pet.name);
});
