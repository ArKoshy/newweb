const express = require('express');
var mongoose = require('./mongoose_db'); //used to modularize mongoose setup
var {Users} = require('./userModel');
var app = express();
var bodyParser =require('body-parser'); // to handle the JSON coming in 
app.use(bodyParser.json()); //BodyParser will act as middleware to parse the data
//routing
//to insert data
app.post('/userentry',(req,res)=>{
   // console.log(req.body);
   //passing a value to model
 var users = new Users(
    {name: req.body.name, age: req.body.age}    
 );    //creating an object of the model //collection will take the same name as model object


 

 users.save().then((data) =>{
 console.log('Successfully saved',data)
  },(err) =>{
     console.log('Error',err)
 }); //inserts data to mongoose

});





app.listen(3000,()=>{
    console.log(' Listening to port 3000');
});

