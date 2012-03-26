var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('Hola Transmilleno');
});

app.listen(3000);

