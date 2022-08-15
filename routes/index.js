const router = require('express').Router();

const company = require('./company');

router.use('/company', company);

module.exports = router;