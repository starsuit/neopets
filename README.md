# neopets api

A very basic neopets api, built to facilitate a FAC16 [student project](https://github.com/FAC-Sixteen/sylvia-sam-game).

To query the api, use this url: `https://neopets.herokuapp.com/api/?search={neopet name here}`

Data compiled using the fandom.com api.

You can search using a neopet name, and the api will return an object with the name of the neopet, the fandom.com article id, and a url for an image of that neopet.

e.g. the url `https://neopets.herokuapp.com/api/?search=Chomby` would return:

```json
{
  "id": 17173,
  "name": "Chomby",
  "image": "https://vignette.wikia.nocookie.net/guilds/images/6/6c/Chomby.gif/revision/latest?cb=20180717054716"
}
```

Built using Node and Express.
