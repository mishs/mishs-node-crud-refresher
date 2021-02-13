const sqlite = require('sqlite').verbose()
const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

var db = new sqlite.Database('./database/employees.db')