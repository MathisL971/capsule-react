const express = require("express");
const cors = require("cors");

let users = [];

const generateId = () => {
  let largestId = -1;
  users.forEach((user) => {
    if (user.id > largestId) {
      largestId = user.id;
    }
  });
  return largestId + 1;
};

const generateActivationKey = () => {
  return "activationKeyXXX";
};

const app = express();

app.use(cors());
app.use(express.json()); // Add this line before your route handlers

app.get("/api/users", (request, response) => {
  response.json(users);
});

app.post("/api/users", (request, response) => {
  const newUser = {
    ...request.body,
    id: generateId(),
    activationKey: generateActivationKey(),
    status: "active",
    bio: "",
    profilePicture: "",
    phoneMobile: "",
    phoneOffice: "",
    title: "",
    profession: "",
    socid: "",
    street1: "",
    street2: "",
    city: "",
    postalCode: "",
    country: "",
  };
  users.push(newUser);
  response.status(200).json(users);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
