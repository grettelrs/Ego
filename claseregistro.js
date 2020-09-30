class _adm {
   constructor(  ID,
        NOMBRE,
        EMAIL,
        ESTADO,
        CLAVE) {
    this.ID = ID;
    this.NOMBRE=NOMBRE ;
    this.EMAIL=EMAIL;
    this.ESTADO= ESTADO;
    this.CLAVE=CLAVE;
            
   }
Guardar() {
   var objetoaenviar = this;

  return new Promise(function(resolve, reject) {

       
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/Nuevosuser');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
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
    

    
    Login() {
    var objetoaenviar = this;
    return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/loginuser');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
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