require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./dataBase/dataBase');
const routes = require('./routes');

connectToDB();

const app = express();
const port = 5000;

app.use(express.json());
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
)

app.listen(port, () => {
  console.log(`Backend started at localhost:${port}`);
});
