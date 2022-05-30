const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => {
    console.log(error);
  })
  db.once("open", () => console.log(" Connnected to the Database "));
};

mongoose.Promise = global.Promise;

module.exports = connectToDB;