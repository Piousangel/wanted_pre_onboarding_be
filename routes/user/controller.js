const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;

const userServices = require('../../services/user');
const db = require("../../models/");
const company_info = db.company_info;

const Op = db.Sequelize.Op;

// 공고 생성
exports.applyCompany = async (req, res) => {
    try {
        console.log(req.body);

        const user_info = {
            공고_id : req.body.notice_id,
            사용자_id : req.body.user_id,
        }

        const info = await userServices.applyCompany({user_info});
        console.log("Apply success");

        res.status(CREATED).json({
          message: '회사 지원 성공',
          채용공고_id : info.채용공고_id,
          사용자_id : info.사용자_id, 
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '회사 지원 실패(이전에 지원한 이력이 있습니다)',
        });
      }
}
