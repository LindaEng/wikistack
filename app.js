//recieving access to our database which is sent from index.js inside database(folder)
const {Page, User} = require('./models')
const {db}  = require('./database');
const Sequelize = require('sequelize');
const path = require('path')
const express = require("express");
const morgan = require("morgan");
//this creates your router
const app = express();
//dev -> you can only see the logs on the developers side
app.use(morgan('dev')); //what is dev?

//authenticate is a function that is native to sequelize
//aunthenticate will let us know if we have access to the database
//functions that are from databases returns a promise
//a promise needs to be dealt with either an async/await or a .then
db.authenticate().then(() => {
  console.log('connected to the database');
})

// .sync will first check to see if the table exists with the template and label, if it does not, it will generate a new table using the template otherwise, it will ignore this request.

 async () => { //IIFE immediately invoked function expression
  await Page.sync();
}

// .sync will first check to see if the table exists with the template and label, if it does not, it will generate a new table using the template otherwise, it will ignore this request.
async () => {
  await User.sync();
}


// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed

//TABLE A: first, last  *TABLE A: first, middle, last => (new)TABLEA: first, middle, last
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.






console.log('//////////////////////DB//////////////////',db)

const PORT = 1337;

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
});

