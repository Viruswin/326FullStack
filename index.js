// require app, mongoose
var app = require('./server/server.js');
var mongoose = require('mongoose');

/*
    Setup mongo connection
*/

// set mongoURI
//var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/grocerylist';

var mongoURI = "mongodb+srv://yu:yu@cluster0-y57ho.mongodb.net/test?retryWrites=true&w=majority";

// connect db
mongoose.connect(mongoURI, {useNewUrlParser: true});

// set port
var port = process.env.PORT || 1337;

// listen on port
app.listen(port);

console.log("Server is listening on port " + port);