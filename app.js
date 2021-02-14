const sqlite = require('sqlite').verbose()
const express = require('express') // req('exp') returns function reference of function called express()
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()
const server = http.createServer(app)
var db = new sqlite.Database('./database/employees.db');

//app.use()- tells express to use piece of middleware
//Middleware is a function Express passes req through before sending them to your routing func
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(_dirname,'./public')));
