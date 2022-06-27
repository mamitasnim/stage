const db = require('../db/db');



module.exports={

    AjouterUser : (req,res) => {

        /*const params=req.body ;

        db.query("INSERT INTO utilisateur"  ,params, function(err, result) {

        });*/

        
      db.query("INSERT INTO `client`.`utilisateur` (`id_utilisateur`, `nom`, `prénom`, `date_naissance`) VALUES ('4', 'eya', 'eljerry', '2022-06-01')", function(err, result) {
         if (err) throw err;
         console.log("Element ajouté avec succe!");  

        return res.send('Successfully added');
      });
      //return res.send('Successfully added');
    }
}

