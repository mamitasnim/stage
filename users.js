var express = require('express');
const userService = require('../services/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});



router.get('/ajouter', function(req, res, next) {

  req.getConnection((err,db)=>{
   if(err) console.log(err);
    else
    userService.AjouterUser(req,res);
  });
  
});



module.exports = router;
