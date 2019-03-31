var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.status(200);
});

app.listen(8888);