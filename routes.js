var controllertareas = require ('./controllertarea.js');
var controllerusuario = require('./controllerusuario.js');    
module.exports = function(app){

	var claseusuario = new controllerusuario();
	
	app.post('/api/Nuevosuser', claseusuario.Guardar);
	// app.post('/api/loginuser', claseusuario.Login);

	var clasetareas = new controllertareas();
	app.post('/api/Guardartarea', clasetareas.Guardar);
	app.post('/api/Seleccionartodostarea', clasetareas.Seleccionartodos);
	// app.post('/api/Modificatarea', clasetareas.Modificar);
	// app.post('/api/Eliminatarea', clasetareas.Eliminarc);
	// app.post('/api/Selecporfechatarea', clasetareas.Seleccionarporfecha);
	app.get('*',function(req,res) {
		//localhost
		res.sendfile('./index.html'); 
	});
}