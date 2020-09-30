var Item = require('./registro');


    let administradorinstanciado = new Item(); 

module.exports = class adm {
   constructor( ) {

   }
    
    
    
    
Guardar(req,res) {
    var claveysaltlocal = administradorinstanciado.setPassword(req.body.CLAVE);
    console.log(claveysaltlocal[0]);
    
   console.log(req.body.CLAVE);
  Item.create(
      {
   NOMBRE: req.body.NOMBRE,
   EMAIL: req.body.EMAIL,
   ESTADO: req.body.ESTADO,
   CLAVE: claveysaltlocal[0],
             SALT: claveysaltlocal[1]   
            }, 
      function(err, item) {
        if (err)
                    {
          res.send(err);}
        
          else{
                Item.find(function(err, item) {
          if (err)
            res.send(err)
          res.json(item);
        });
                
                
          }
                
      }); 
}    
    
    
Login(req,res) {
      Item.find({EMAIL:req.body.EMAIL}, function(err, item) {
      if (err){
        res.send(err);
      }
        else{console.log(item[0].CLAVE);
            if(administradorinstanciado.validPassword(req.body.CLAVE,item[0].CLAVE,item[0].SALT))
                {
                   item[0].SALT="NO F..ING WAY";
                 res.json(item); // devuelve todas las Personas en JSON 
                }
            else
                {
                    res.status(400).send({ 
                    message : "Datos incorrectos"
                }); 
                }
        
        }
    
    
    
    
    
    
    
    }
      );


}