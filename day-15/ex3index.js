var express=require('Express');
var app=express();
var things=require('./ex3.js');
app.use('/meena',things);
	


app.listen(3000);