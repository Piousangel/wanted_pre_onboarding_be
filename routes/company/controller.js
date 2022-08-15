const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;

const companyServices = require('../../services/company');


exports.setCompany = async (req, res, next) => {
    try {
        console.log(req.body);
        const { 회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술 } = req.body;
        
        await companyServices.setCompany({회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술});
        console.log("done set");
        res.status(CREATED).json({
          message: '채용 공고 등록 성공',
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '채용 공고 등록 실패',
        });
      }
}