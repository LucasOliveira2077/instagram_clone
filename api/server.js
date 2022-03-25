let express = require('express');
let bodyParser = require('body-Parser');
let mongodb = require('mongodb');

let app = express();

//middleware bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 8080;
app.listen(port);

console.log('o servidor esta funcionando');