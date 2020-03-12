const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Authenticate Login')
});

router.get('/', (req, res) => {
    res.send('Retrieve authentication')
});

module.exports = router;