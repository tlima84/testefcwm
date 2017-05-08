const Produto = require('../app/models/produto');
const Usuario = require('../app/models/usuario');
const Board = require('../app/models/board');
const crypto = require('crypto');
const mongoose = require('mongoose');
mongoose.connect('localhost:27017/teste');

let produtos =[ 
	new Produto({
		nome: "Geladeira 1",
		descricao: "Geladeira 1 220L",
		preco: 1500.00,
		imagem: "http://localhost:3021/img/modelGel1.jpg"	
	}),
	new Produto({
		nome: "Geladeira 2",
		descricao: "Geladeira 2 320L",
		preco: 2500.00,
		imagem: "http://localhost:3021/img/modelGel2.jpg"	
	}),
	new Produto({
		nome: "Geladeira 3",
		descricao: "Geladeira 3 220L",
		preco: 1600.00,
		imagem: "http://localhost:3021/img/modelGel1.jpg"	
	}),
	new Produto({
		nome: "Geladeira 4",
		descricao: "Geladeira 4 320L",
		preco: 2600.00,
		imagem: "http://localhost:3021/img/modelGel2.jpg"	
	}),
	new Produto({
		nome: "Lavadora 1",
		descricao: "Lavadora 1 6KG",
		preco: 600.00,
		imagem: "http://localhost:3021/img/lavadora1.jpg"	
	}),
	new Produto({
		nome: "Lavadora 2",
		descricao: "Lavadora 2 10KG",
		preco: 900.00,
		imagem: "http://localhost:3021/img/lavadora2.jpg"	
	}),
	new Produto({
		nome: "Lavadora 3",
		descricao: "Lavadora 3 6KG",
		preco: 699.00,
		imagem: "http://localhost:3021/img/lavadora1.jpg"	
	}),
	new Produto({
		nome: "Lavadora 4",
		descricao: "Lavadora 4 10KG",
		preco: 999.00,
		imagem: "http://localhost:3021/img/lavadora2.jpg"	
	}),
	new Produto({
		nome: "TV 1",
		descricao: "TV 1 48'",
		preco: 999.00,
		imagem: "http://localhost:3021/img/tv1.jpg"	
	}),
	new Produto({
		nome: "TV 2",
		descricao: "TV 1 60'",
		preco: 2000.00,
		imagem: "http://localhost:3021/img/tv2.jpg"	
	}),
	new Produto({
		nome: "TV 3",
		descricao: "TV 3 48'",
		preco: 1999.00,
		imagem: "http://localhost:3021/img/tv1.jpg"	
	}),
	new Produto({
		nome: "TV 4",
		descricao: "TV 4 60'",
		preco: 2999.00,
		imagem: "http://localhost:3021/img/tv2.jpg"	
	})
];

let listaElliot = [
	new Board({
		nome: "Elliot",
		descricao: "Me",
		fsociety: "member",
	}),
	new Board({
		nome: "Darlene",
		descricao: "She's my sister, She's my sister, She's my sister",
		fsociety: "member",
	}),
	new Board({
		nome: "Mr.Robot",
		descricao: "He's dead... I guess.",
		fsociety: "member",
	}),
	new Board({
		nome: "Tyrell",
		descricao: "Dead?",
		fsociety: "!member",
	})
]

let helper = 0;
let senha = "123456";
let hash = ''+crypto.createHash('sha256').update(senha).digest('base64');

let usuarios = [new Usuario({
	login : "usuario",
	senha: hash
})];

usuarios[0].save();
listaElliot.map(board => board.save());

for(let i=0; i < produtos.length; i++){
	
	produtos[i].save((err, result) => {
		helper++;
		if(helper === produtos.length){
			mongoose.disconnect();
		}
	});
}
