var app = require('express').createServer();

app.get('/', function(req, res){
  var definition = "<h1>informaci&oacute;n para rutas transmilenio</h1>"+
  				   "<h2>Estaciones</h2>"+
                   "<ul>"+
                   "<li>id: </li>"+
                   "<li>Color o sector:</li>"+
                   "<li>coordenadas: lat y long </li>"+
                   "<li>Direcci&oacute;n: </li>"+
                   "<li>rutas: </li></ul>"+
                   "<h2>Rutas</h2>"+
                   "<ul>"+
                   "<li>id: </li>"+
                   "<li>Destino:</li>"+
                   "<li>paradas: </li>"+
                   "<li>Dias-Horarios: </li>"+
                   "</ul>";
  res.send(definition);
});

app.listen(3000);

