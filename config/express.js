var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

module.exports = function() {
	var app = express();
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	
    app.use(express.static(__dirname + '../../public'));
	app.set('views', __dirname + '../public/views');
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	require('../app/routes/index.server.routes.js')(app);
	/* Declared in index.server.routes.js */ 
	// app.get('*', function(req, res){
	//     res.render('index.html');
	// });
	
	require('../app/routes/user.server.routes.js')(app);
    return app;
};