const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let produtoSchema = new Schema({
	nome:{type: String, required: true},
	descricao:{type: String, required: true},
	preco: {type: Number, required: true},
	imagem:{type: String, required: true}
});

module.exports = mongoose.model('Produto', produtoSchema);
