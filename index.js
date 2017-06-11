var express = require('express');
var app = express();
var child_process = require('child_process');


app.get('/l/:house/:number/:direction', function(req, res) {
	console.log('turning light %s %s on', req.params.house, req.params.number);
	var process = child_process.spawn(
        	'/home/chris/bin/lights', [
			req.params.house,
			req.params.number,
			req.params.direction 
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

app.listen(8080, function(err) {
	console.log('listening on port 8080');
});
