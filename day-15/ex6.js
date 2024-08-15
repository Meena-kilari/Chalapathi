var express=require('express');
var bodyparser=express('body-parser');
var multer=express('multer');
var upload=multer();
var app=express();

app.get('/',function(req,res){
	res.render('expr');
});

app.set('view engine','ejs');
app.set('views','./views');
app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));
app.post('/',function(req,res){
	concole.log(req.body);
	res.send('received ur request');
});

app.listen(3000);