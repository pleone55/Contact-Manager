const express = require('express');
const cors = require('cors');

const app = express();

//init middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');

app.use('/api/auth', require('./server/routes/auth.routes'));
app.use('/api/contacts', require('./server/routes/contact.routes'));
app.use('/api/users', require('./server/routes/users.routes'));

app.listen(7000, () => {
    console.log("Listening on port 7000")
});