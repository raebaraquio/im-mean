module.exports = function(app) {
	/* Setting the index page */ 
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);
	
	/* Another working version without index declaration */
	// app.get('*', function(req, res){
	//     res.render('index.html');
	// });
};