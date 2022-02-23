const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(`mongodb+srv://himanshu123:himanshu123@cluster0.jswnk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

db=mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;

