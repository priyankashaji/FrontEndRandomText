var express= require("express");
var app= express();
var lyrics = require('./lyric.js')
app.use(express.static(__dirname +'/public'));
app.get('/',function(req,res){
  res.send("Hello");
});
app.get('/lyric',function(req,res){
  var randomLyric = lyrics[Math.floor(Math.random()*lyrics.length)];

  res.send(randomLyric);
});
var server= app.listen(3000,function(){
  var port=server.address().port;
  console.log("My server is listening to the port http://localhost:%s",port);
});
