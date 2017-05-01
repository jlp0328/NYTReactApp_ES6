var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.Promise = Promise;

// Require History Schema
var Article = require("./models/Article");

var app = express();
var port = process.env.PORT || 8080;


app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


app.listen(port, function() {
  console.log("App running on port " + port);
});

//Route to root and connect index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


//get all article records and limit to 10
app.get("/api/saved", function(req, res) {

  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(10).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api/saved", function(req, res) {
  console.log("BODY: " + req.body.location);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Article.create({
    title: req.body.location,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

