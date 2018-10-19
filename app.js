const express = require('express');
var mongoose = require('./mongoose_db'); //used to modularize mongoose setup
var {Users} = require('./userModel');
var app = express();
var bodyParser =require('body-parser'); // to handle the JSON coming in 
app.use(bodyParser.json()); //BodyParser will act as middleware to parse the data

// For CORS,Pgm Line no 12 to 29
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//routing
//to insert data
app.post('/userentry',(req,res)=>{
  // console.log(req.body);
   //passing a value to model
 var users = new Users(
    {name: req.body.name, age: req.body.age,rollno: req.body.rollno,admno: req.body.admno,college: req.body.college}    
 );    //creating an object of the model //collection will take the same name as model object

 users.save().then((data) =>{
 //console.log('Successfully saved',data)
 res.send(data);
  },(err) =>{
    // console.log('Error',err)
   // res.send(err);
    res.status(400).send(err);
 }); //inserts data to mongoose

});


 //To READ all DATA
 app.get('/getusers',(req,res)=>{
    Users.find().then((data)=>{
        res.send(data);
    },(err)=>{
        // console.log('Error',err)
       // res.send(err);
        res.status(400).send(err);
     })
})

//To READ specific user DATA
app.get('/getusers/:name',(req,res)=>{
    var Name= req.params.name;
    Users.find({name:Name}).then((data)=>{
        res.send(data);
    }).catch((err)=>{            //use this instead of error
        res.send(err)
    })
})


app.listen(3000,()=>{
    console.log(' Listening to port 3000');
});

