var users = require('../../app/controllers/user.server.controller');

module.exports = function(app) {
    app.route('/users').get(users.list);
    app.route('/users/new').post(users.create);
    app.route('/users/:userId').get(users.read);
    app.param('userId', users.userById);
    // app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
};