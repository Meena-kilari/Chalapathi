
var express=require('express');
var app=express();
app.get('/home',function(req,res){
	res.send("welcome to chalapathi institute of engineering and technology.I'm Meenakshi Kilari");
});
app.post('/contact',function(req,res){
	res.send("welcome to '/contact'!\n");
});
app.all('/test',function(req,res){
	res.send("welcome to chalapathi institute of engineering and technology");
});
app.listen(3000);