const router = require('express').Router();

const controller = require('./controller');

router.post('/create', controller.createCompany);  //공고 생성

router.post('/update', controller.updateCompany);  //공고 수정

router.post('/delete', controller.deleteCompany);  //공고 삭제

// router.get('/find', controller.findCompany);       //회사 공고 조회

module.exports = router;