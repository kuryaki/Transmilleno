Proyecto de las rutas de transmilenio hecho en javascript

Inicialmente Node.js para el Restful API

### Instalarlo y correrlo

npm install
node app.js

si no corre y saca error de mising algo o error en tick 1

cd node_modules/mongoose/
npm install -d

al parecer hay un bug de npm con las dependencias de las dependencias de mongoose 


### Data de los API

hay dos objetos identificados y necesarios para el proyecto
rutas y estaciones

las estaciones contienen la siguiente info:
nombre de estación
latitud y longitud
Sector-color

las rutas contienen la siguiente info:
destino
ruta de estaciones
dias
horarios por dia

se pueden definir json para estaciones de la siguiente manera
{
	"id":12,
	"estacion":"museo del oro",
	"coordenadas":{
		"longitud":75.002566,
		"latitud":45.6656655
	},
	"sector":{
		"letra":"J",
		"color":"rosado",
		"nombre":"las aguas"
	}
} 
json para rutas:
{
	"nombre":"J24",
	"destino":"las aguas",
	"estaciones":[
		{"id":10, "orden":1},
		{"id":8, "orden":2},
		{"id":54, "orden":3},
		{"id":22, "orden":4},
		{"id":6, "orden":5},
		{"id":32, "orden":6},
	],
	"dias":[
		{
			"dias":"l-s",
			"desde":600,
			"hasta":1800
		},
		{
			"dias":"d",
			"desde":900,
			"hasta":2100
		}
	]
}
