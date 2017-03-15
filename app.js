var express = require('express')
var app = express()
var routes = require('./routes/index')
var path = require('path')
var bodyParser = require('body-parser');

app.set("views",path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use('/',routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000)
console.log("running")