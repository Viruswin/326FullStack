// require app, mongoose
var app = require('./server/server.js');
var mongoose = require('mongoose');

/*
    Setup mongo connection
*/


//const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI || 'mongodb+srv://yu:yu@cluster0-y57ho.mongodb.net/test?retryWrites=true&w=majority';
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  //// perform actions on the collection object
  //client.close();
//});


// set mongoURI
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/grocerylist';


// connect db
mongoose.connect(uri, {useNewUrlParser: true});//, {useNewUrlParser: true});

// set port
var port = process.env.PORT || 1337;

// listen on port
app.listen(port);

console.log("Server is listening on port " + port);
