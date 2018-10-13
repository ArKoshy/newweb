//const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Users'); //creates a db called users when we push some data to Mongo


//create a Model

var Users = mongoose.model('Users',{
    name:{type:String,
    required:true,                //add validations
    minlength:2,
    trim:true},        
    age:{type:Number}
});
// Model Users is diff from the database Users

//passing a value to model
var users = new Users(
     {name:'Neethu', age: 31}
     
);    //creating an object of the model
//collection will take the same name as model object

users.save().then((data) =>{
    console.log('Successfully saved',data)
},(err) =>{
    console.log('Error',err)
}); //inserts data to mongoose





