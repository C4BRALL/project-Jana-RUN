const express = require('express');

const app = express();

app.listen('3000');

let author = "Hankboy"

app.route('/').get( (request, response) => response.send('Hello') );
app.route('/user/login').get( (request, response) => response.send('Sign In') );

//middleware
app.use(express.json());

// app.route('/user/register/signup').post( (request, response) => console.log(request.body) );
app.route('/test/post').post( (request, response) => response.send(request.body) );

// PUT tbm usa middleware

app.route('/tester/up').get(( req, res ) => res.send(author))

app.route('/tester/up').put( (request, response) => {
  author = request.body.author;
  response.send(author);
});

app.route('/tester/e/up/:id').delete( (request, response) => {
  // author = '';
  response.send(request.params.id);
});


