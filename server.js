const express = require('express');
const cors = require('cors');
// const path = require('path');

const app = express();

//init middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');

app.use('/api/auth', require('./server/routes/auth.routes'));
app.use('/api/contacts', require('./server/routes/contact.routes'));
app.use('/api/users', require('./server/routes/users.routes'));

//Serve static assets in production
// if(process.env.NODE_ENV === 'production') {
//     //Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
// }

// const PORT = process.env.PORT || 7000

app.listen(7000, () => {
    console.log(`Listening on port 7000`)
});