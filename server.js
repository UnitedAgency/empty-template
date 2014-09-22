/**
 * Simple Node.js HTTP server
 *
 * Installation:
 * =============
 * Install Node.js and navigate to this directory.
 * Run npm install && clear && node server.js to start the server
 * 
 * @license: MIT License
 * @author: Jabran Rafique <jabran@united-agency.co.uk>
 *
 */



var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('app', {
	'index': ['index.html', 'index.htm', 'default.html']
}));

app.use(bodyParser.urlencoded());

app.use(function(req, res)	{
	console.log('Request received.');
	console.log('Request processed.');
});

http.createServer(app).listen(3000);

console.log('Server started at http://localhost:3000');