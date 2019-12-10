   //require the library
  const mongoose = require('mongoose');
   //connect to the database
mongoose.connect('mongodb://localhost/messages_db');

      //accquire the connection (to check if it is successfull or not)
const db=mongoose.connection;
 //error
 db.on('error',console.error.bind(console,'error connectiong to db'));
 
 // up and running
 db.once('open',function(){
     console.log('successfully connected to the database');

 });
