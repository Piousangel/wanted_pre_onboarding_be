const router = require('express').Router();

const controller = require('./controller');

router.post('/create', controller.createCompany);  //공고 생성

router.post('/update', controller.updateCompany);  //공고 수정

router.post('/delete', controller.deleteCompany);  //공고 삭제

router.get('/findAll', controller.findAllCompany);       //회사 공고 목록 조회

router.get('/some/url?', controller.findCompanyIncludeName);   //쿼리스트링을 통한 공고 검색

// router.post('/findbyCompanyName', controller.findByCompanyName);
// 보너스1. some/url?search=원티드로 검색했을 때 원티드가 포함된 모든 공고 조회할 수 있게 해야함.

// 보너스2. 채용 상세 페이지 가져오기 
// "채용내용"이 추가적으로 담겨있음 -> 해당 회사가 올린 다른 채용공고가 추가적으로 포함됩니다.
module.exports = router;