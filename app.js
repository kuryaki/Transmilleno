var app = require('express').createServer();

app.get('/', function(req, res){
  var definition = "<h1>informaci&oacute;n para rutas transmilenio</h1>";
  res.send(definition);
});

app.listen(3000);

