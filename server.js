// Dependencies

var express = require ("express");
var hndlebrs = require ("express-handlebars");
var methoverride = require ("method-override");
var bodyparse = require("body-parser");
var mysql = require ("mysql");

//The port
var port = 3000;

//Sets up the Express App
var app = express();
