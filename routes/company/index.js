const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.setCompany);

module.exports = router;