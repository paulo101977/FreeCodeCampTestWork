var express = require('express');
var app = express(); //new app for create server
var moment = require('moment');

app.use(express.static('public')); //static files


app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/:expression' ,function(req, res){

  var param = req.params.expression;
  var natural = (new Date(param)).getTime();
  var unix =  new Date().setTime(param);
  //var d = d.setTime(req.params.expression);
    
  if(natural > 0){ //is valid
      res.send(JSON.stringify({'unix': natural, 'natural' : param.toString()}))
  } else if (unix){
      res.send(JSON.stringify({unix: unix , 'natural' : moment(unix).format('MMM DD, YYYY')}))
  }
  else {
      res.send(JSON.stringify({ "unix": null, "natural": null }))
  }  
  
});