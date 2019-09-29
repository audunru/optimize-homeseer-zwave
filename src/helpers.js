require("dotenv").config();

const getCommandBody = () => {
  if (process.argv.includes("full")) {
    return getFullOptimizeCommandBody();
  }

  return getOptimizeCommandBody();
};

const getFullOptimizeCommandBody = () => {
  return getBody(13);
};

const getOptimizeCommandBody = () => {
  return getBody(12);
};

const getBody = operation => {
  const controller = process.env.CONTROLLER;
  const id = process.env.ID;

  return `OpSelect_${controller}=${operation}&id=GO_${controller}-${operation}_ID${id}&GO_${controller}-${operation}=Submit`;
};

const handleResponse = response =>
  response.ok
    ? response.text()
    : Promise.reject(new Error("Failed to load data from server"));

module.exports = {
  getCommandBody,
  handleResponse
};
