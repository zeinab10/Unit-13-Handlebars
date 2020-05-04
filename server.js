var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js");

var app= express ();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ 
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");
app.use(routes);

'use strict';

setInterval(function () {}, Number.MAX_VALUE); // keep process alive

var myEmitter = new (require('events').EventEmitter)();

// add this handler before emitting any events
process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
});

myEmitter.emit('error', new Error('foobar'));

app.listen(PORT, function() {
    console.log("Server listening on:"+ PORT);

});