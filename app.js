//jshint esversion:6
const request = require('request')
const express = require("express");
const bodyParser = require("body-parser");

var ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/shopping-list', function(req, res) {
  const options = {
    url: "https://wdrd6suw5h.execute-api.us-east-1.amazonaws.com/test/list",
    method: 'GET',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    // body = JSON.parse(body);
    item = body['item'];
    res.render('list', {
      item: item
    });
  });
});

app.get('/display', function(req, res){
  const options = {
    url: "https://wdrd6suw5h.execute-api.us-east-1.amazonaws.com/test/item",
    method: 'GET',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    // body = JSON.parse(body);
    item = body;
    // console.log(body)
    res.render('display', {
      item: item
    });
  });
})

app.get('/item/:id',function(req, res){
  id = req.params.id
  const options = {
    url: "https://wdrd6suw5h.execute-api.us-east-1.amazonaws.com/test/item/" + id,
    method: 'GET',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    // body = JSON.parse(body);
    item = body['item'];
    // console.log(body)
    res.render('item', {
      item: item
    });
  });
})

app.get('/edit-item/:id',function(req, res){
  id = req.params.id
  const options = {
    url: "https://wdrd6suw5h.execute-api.us-east-1.amazonaws.com/test/item/" + id,
    method: 'GET',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(options, function(error, response, body) {
    // body = JSON.parse(body);
    item = body['item'];
    // console.log(body)
    res.render('editItem', {
      item: item
    });
  });
})

app.get('/create', function(req,res){
  res.render('create')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Server started.");
});
