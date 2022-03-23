require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const connectToDB = require('./dataBase/dataBase');

connectToDB();

const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
)

// require('./controllers/AuthController')(app);

app.listen(port, () => {
  console.log(`Backend started at localhost:${port}`);
});

// app.use(express.json());

// app.route('/api/users').get((req, res) => res.json({
//   users
// }));

// app.route('/api/user/:id').get((req, res) => {
//   const userId = req.params.id;

//   const user = users.find(user => Number(user.id) === Number(userId));

//   if (!user) {
//     return res.json('User nor found!');
//   };

//   res.json(user);
// });

// app.route('/api').post((req, res) => {
//   const lastId = users[users.length - 1].id;
//   users.push({
//     id: lastId + 1,
//     name: req.body.name,
//     email: req.body.email
//   })
//   res.json('Saved user');
// });
