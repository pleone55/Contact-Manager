const express = require('express');

const app = express();

require('./server/routes/contact.routes')(app);
app.listen(7000, () => {
    console.log("Listening on port 7000")
});