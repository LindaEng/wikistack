//downloaded sequelize and imported
const Sequelize = require('sequelize');
//new instance of sequelize to access our database
const db = new Sequelize('postgres://localhost:5432/wikistack');

//this index.js is in a separate file to make our lives easier

//since {db} => we have to add {} when we require from other files
module.exports = {
  db
}

