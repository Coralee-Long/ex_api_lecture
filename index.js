const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3002;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Peter" },
  { id: 4, name: "Sarah" },
];

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((element) => element.id === parseInt(id));
  res.send(user);
});

app.listen(PORT, console.log(`Server is listening to the port ${PORT}`));
