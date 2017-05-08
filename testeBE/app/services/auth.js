const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken'); 
const crypto = require('crypto');
const secret = 'hodor'


module.exports = app => {
	let authService = {};
    let usuario = mongoose.model('Usuario');

    authService.autenticar = (req, res) =>{
        console.log(req.body.senha);
    	let hash = ''+crypto.createHash('sha256').update(req.body.senha).digest('base64');
       	usuario.findOne({
             login: req.body.login,
             senha: hash
        }).then(usuarioRet =>{
             if (!usuarioRet) {
                 res.sendStatus(401);
             } else {                
                 let token = jwt.sign({login: usuarioRet.login}, secret, {
                     expiresIn: 60
                 })
                 res.set('x-access-token', token); 
                 res.header("Access-Control-Expose-Headers", "x-access-token");
                
                 console.log('Autenticado com sucesso');
                 res.end(); 
             }
         });
    }

    authService.verificarToken =(req, res, prox) => {

         let token = req.headers['x-access-token'];

         if (token) {
            jwt.verify(token, secret,(err, decoded) => {
                 if (err) {
                    return res.sendStatus(401);
                 } else {
                    req.usuario = decoded;    
                    prox();
                  }
            });
        } else {
            return res.sendStatus(401);
        }
    }

    return authService;

};
