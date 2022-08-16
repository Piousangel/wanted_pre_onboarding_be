const router = require('express').Router();

const company = require('./company');
const user = require('./user');

router.use('/company', company);
router.use('/user', user);

module.exports = router;