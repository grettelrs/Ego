var Item = require('./tarea');
module.exports = class _tarea {
   constructor( ) {

   }
Guardar(req,res) {
      Item.create(
			{

    NOMBRE: req.body.NOMBRE,
    NOTAS: req.body.NOTAS,
    FECHA: req.body.FECHA,
    ESTADO: req.body.ESTADO,
      },
        function(err, item) {
				                      if (err){
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
    
 Modificar(req,res) {
  console.log(req.body)
		Item.update( {_id : req.body._id},
					{$set:
			{

    NOMBRE: req.body.NOMBRE,
    NOTAS: req.body.NOTAS,
    FECHA: req.body.FECHA,
    ESTADO: req.body.ESTADO,
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) {
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{ 
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
tareasspormesyanno(mes,anno){
                  
       var objetoaenviar = this;
                var vectordetareasfiltradas = [];
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Selecporfechatarea');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var tareas =JSON.parse(xhr.responseText);
       
        
        for(var elemento in tareas)
            {
                var fechadelatarea = new Date(tareas[elemento].FECHA);
                if((fechadelatarea.getMonth()+1 == mes) && (fechadelatarea.getFullYear() == anno))
                    {
                        vectordetareasfiltradas.push(tareas[elemento]);
                    }
                    
            }
        
         resolve(vectordetareasfiltradas);
        
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
   
            }
}
