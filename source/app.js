var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('DevOps - Strona startowa!');
	console.log('Zażądano strony Start');
});

app.get('/users', function(req, res){
	res.send('DevOps - strona Users!');
	console.log('Zażądano strony Users');
});

app.get('/services', function(req, res){
	res.send('DevOps - strona Services!');
	console.log('Zażądano strony Services');
});

app.get('/info', function(req, res){
	res.send('DevOps - strona INFOS!');
	console.log('Zażądano strony INFOS');
});

app.listen(3001, function(){
	console.log('Aplikacja OK');
});
