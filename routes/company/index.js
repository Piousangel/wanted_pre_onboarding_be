const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createCompany);

module.exports = router;