const UserController = require('../controllers/contact.controllers');

module.exports = function(app){
    app.post('/api/users', UserController.getContact)
}