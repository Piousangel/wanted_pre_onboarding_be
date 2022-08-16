const router = require('express').Router();
const controller = require('./controller');

router.post('/apply', controller.applyCompany);  //공고 생성


module.exports = router;