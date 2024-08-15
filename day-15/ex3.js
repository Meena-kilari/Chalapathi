var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
	res.send("I'm Meenakshi Kilari");
});
router.post('/',function(req,res){
	res.send("welcome to home");
});

module.exports=router;