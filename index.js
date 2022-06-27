var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json("hello word")
});


//handle post request for user registration 

router.post('/auth_login',function(req,res){
var nom=req.body.nom ;
var prénom=req.body.prénom ;
var date_naissance=req.body.date_naissance ;

});


//rout for home page
router.get('/home',function(req,res){
res.render('home',{message:'welcome' + req.session.nom});
});

module.exports = router;
