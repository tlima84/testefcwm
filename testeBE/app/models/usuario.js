let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
	login:{type: String, required: true},
	senha:{type: String, required: true}
});

module.exports = mongoose.model('Usuario', usuarioSchema);