 class _tarea {
         constructor(_id,
          NOMBRE,
          NOTAS,
          FECHA,
          ESTADO
                  ) {
             this._id=_id;
          this.NOMBRE =NOMBRE;
          this.NOTAS =NOTAS;
          this.FECHA=FECHA;
          this.ESTADO=ESTADO;
         }
      Guardar() {
         var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Guardartarea');
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

       Modificar() {

             var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Modificatarea');
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

  Eliminarc() {
        
             var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Eliminatarea');
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
      Seleccionartodos() {

             var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Seleccionartodos');
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

  Seleccionarporfecha() {

             var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

       var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Selecporfechatarea');
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

  Seleccionarporid(req,res) {

            var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Seleccionarporid');
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

  Seleccionarporestado(req,res) {



            var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

  try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Seleccionarporestado');
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

   peliculaspormesyanno(mes,anno)
        {
              var objetoaenviar = this;
              var vectordepeliculasfiltradas = [];
                // Return a new promise.
                 return new Promise(function(resolve, reject) {
                // Do the usual XHR stuff
             try {
                     var xhr = new XMLHttpRequest();
                     xhr.open('POST', 'http://localhost:8080/api/Seleccionartodos');
                     xhr.setRequestHeader('Content-Type', 'application/json');
                     xhr.onload = function() {
                         if (xhr.status === 200) {
               var peliculas =JSON.parse(xhr.responseText);
               for(var elemento in peliculas)
                   {
                       var fechadelapelicula = new Date(peliculas[elemento].FECHA);
                         if((fechadelapelicula.getMonth()+1 == mes) && (fechadelapelicula.getFullYear() == anno))
                             {
                                 vectordepeliculasfiltradas.push(peliculas[elemento]);
                             }
                     }
                resolve(vectordepeliculasfiltradas);
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


                      // tareainstanciada.Guardar().then(function(response){
                      //   console.log("SUCCESS!",response);
                      //   document.getElementById("prop").style.display="none";
                      //   document.getElementById("cerr").style.display="none";
                      //   document.getElementById("iconocheck").style.display="block";
                      //   $(".check-icon").show();
                      //   setTimeout( function(){
                      //   window.location.reload(false);
                      //   }, 2200);
                      // },function(error){
                      //   console.error("CRITICAL ERROR",error);
                      //   alert("Error"+error);
                      // });

