let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let board = new Schema({
	nome:{type: String, required: true},
	descricao:{type: String, required: true},
	fsociety:{type: String, required: true}
});

module.exports = mongoose.model('Board', board);