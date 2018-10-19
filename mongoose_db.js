
//mongoose setup
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Users',{ useNewUrlParser: true }); //creates a db called users when we push some data to Mongo


module.exports={
    mongoose:mongoose  //assinged the mongoose created above to mongoose object here to return
}