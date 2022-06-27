var mysql = require('mysql');
const app = require('../app');


var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '' ,
  database: "client" 
});

//app.use(myconnection(mysql,db,'pool')) ;



db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    
    db.query("Select * from utilisateur ", function (err, res) {
      if(err) 
        console.log("error insertion : ", err);
     console.log("selection faite!");
     console.log(res);

    
    }) ;
    

    });
  

module.exports=db ;