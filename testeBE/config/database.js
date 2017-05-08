module.exports = (uri) => {	
	let mongoose = require('mongoose');
	mongoose.connect(uri);

	process.on('SIGINT', ()=> {
		mongoose.connection.close( ()=> {
			process.exit(0);
		});
		
	})
};