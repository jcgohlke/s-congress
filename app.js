// dependency requirement for libraries
const express = require('express');
const mongoClient = require('mongodb').MongoClient;

// const path = require('path');
const mustacheExpress = require('mustache-express');

// create app instance for Express
const app = express();

var url = 'mongodb://localhost:27017/robotsdb';