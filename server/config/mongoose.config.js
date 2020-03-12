const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/contact-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Could not establish a connection to the database"));