const router = require('express').Router();

const controller = require('./controller');

router.post('/noticeCreate', controller.createCompany);  //공고 생성

router.post('/noticeUpdate', controller.updateCompany);  //공고 수정

router.post('/noticeDelete', controller.deleteCompany);  //공고 삭제

router.get('/findAll', controller.findAllCompany);       //회사 공고 목록 조회

router.get('/some/url?', controller.findCompanyIncludeName);   //쿼리스트링을 통한 공고 검색

module.exports = router;