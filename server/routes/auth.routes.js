const AuthController = require('../controllers/contact.controllers');

module.exports = function(app){
    app.post('/api/auth', AuthController.getContact);
    app.get('/api/auth', AuthController.getContact);
}