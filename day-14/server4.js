var http=require('http');
var uc=require('upper-case');
http.createServer(function(req,res){
	//fs.readFile('client.html',function(err,data){
		res.writeHead(200,{'content-type':'text/html'});
		res.write(uc.upperCase('hello every one'));
		
	}).listen(8080);