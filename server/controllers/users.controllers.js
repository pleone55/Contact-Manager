const { User } = require('../models/user.models');

module.exports.getUser = (req, res) => {
    const { email } = req.body;

    User.findOne({ email })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}

module.exports.createUser = (req, res) => {
    const { name, email, password } = req.body;
    User.create({ name, email, password})
        .then(user => res.json(user))
        .catch(err => res.status(400). json(err));
}
