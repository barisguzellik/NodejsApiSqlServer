//NODE MODULES
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//ROUTES
var _base=require('./routes/_base');
var product = require('./routes/product');

//PUBLIC
var publicDir = (__dirname + '/public');
app.use(express.static(publicDir));

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//USE ROUTES
app.use('/', _base);
app.use('/',product);

app.listen(3000, () => {
    console.log('Api is running...');
})

