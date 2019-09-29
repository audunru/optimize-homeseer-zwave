require("isomorphic-fetch");
require("dotenv").config();
const { handleResponse, getCommandBody } = require("./helpers.js");

fetch(`${process.env.HOST}/ZWaveControllers`, {
  body: getCommandBody(),
  method: "POST"
})
  .then(handleResponse)
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));
