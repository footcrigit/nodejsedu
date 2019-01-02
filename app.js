var express = require('express');
var app = express();
var port = 8080;
app.get('/', function(req,res){
  res.send('new mean proj test')
});
app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/routing', function(req,res){
  res.send('Mean project routing is working')
});

app.listen(port,function(err){
  console.log('the server is running on ' + port);
});
