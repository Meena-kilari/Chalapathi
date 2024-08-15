var fs = require('fs');
fs.appendFile('apple.txt',' Yes, white crows r flying',function(err,file){
	if(err) throw err;
	console.log('saved!');
});