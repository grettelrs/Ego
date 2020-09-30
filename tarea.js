var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tarea = new Schema ({
	NOMBRE: String,
	NOTAS: String,
	FECHA: Date,
	ESTADO: String,
});
module.exports = mongoose.model('Tarea',tarea);
