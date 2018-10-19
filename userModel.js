var mongoose = require('mongoose');

//create a Model
//create a model for each structure.

var Users = mongoose.model('Users',{
    name:{type:String,
    //required:true,                //add validations
    minlength:2,
    trim:true},        
    age:{type:Number},
    rollno:{type:Number},
    admno:{type:Number},
    college:{type:String}
        
});
// Model Users is diff from the database Users

// module.exports = {
//   Users:Users
//   }

 module.exports ={Users}   //=> ECMA 6 standard to do the same as above;