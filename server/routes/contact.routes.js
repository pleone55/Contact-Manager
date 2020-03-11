const ContactController = require('../controllers/contact.controllers');

module.exports = function(app) {
    app.get('/api/contacts', ContactController.getContact);
    app.post('/api/contacts', ContactController.getContact);
    app.put('/api/contacts/:id', ContactController.getContact);
    app.delete('/api/contacts/:id', ContactController.getContact);
}
