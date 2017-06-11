var express = require('express');
var app = express();
var child_process = require('child_process');


app.get('/l/:house/:number/:direction', function(req, res) {
    var house, number, direction;
    house = req.params.house.toUpperCase();
    number = parseInt(req.params.number);
    direction = req.params.direction.toUpperCase();
    console.log('turning light %s %s %s', house, number, direction);
    
	var process = child_process.spawn(
        	'/home/chris/bin/lights', [
			house,
			number,
			direction 
		], {
			stdio: 'inherit',
			cwd: '/home/chris'
		}
	);
	
	process.on('error', function(e) {
		console.log('error event');
		console.log(e);
	});

	process.on('message', function(e) {
		console.log('message event');
		console.log(e);
	});

	process.on('exit', function(e) {
		console.log('exit event');
		res.sendStatus(200).end();		
	});

});

app.use("/", express.static(__dirname + '/static/'));


app.listen(8080, function(err) {
	console.log('listening on port 8080');
});
