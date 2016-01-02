require('babel-core/register');
require('node-jsx').install

var express = require("express")
var route = require("./app/routes")
var path = require("path")

var app = express()
var port = 4000

app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

route(app)

var server = app.listen(port, function(){
  console.log("server on in port: " + port)
})