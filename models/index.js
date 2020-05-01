const Sequelize = require('sequelize');
//new instance of sequelize to access our database
//you only need to create one instance of the database
//always require db on every page that you need access
const {db} = require('../database');


//ORM Object Relational Model <- Sequelize




//SCHEMA of database
const Page = db.define('pages', {
  title: {
    type: Sequelize.STRING
  },
  //slug is to create url-friendly text
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  //Enum is a class that
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

//SCHEMA of database
const User = db.define('users', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});


module.exports = { Page, User };
