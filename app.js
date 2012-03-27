var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express.createServer();

mongoose.connect('mongodb://localhost/transmilleno');

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, 'public')));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('views', path.join(application_root, 'views'));
    app.set('view engine', 'jade');
});

app.get('/', function(req, res){
  var definition = "<h1>informaci&oacute;n para rutas transmilenio</h1>";
  res.send(definition);
});

app.listen(3000);

