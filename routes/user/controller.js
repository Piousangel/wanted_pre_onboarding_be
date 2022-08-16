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

        const info = await userServices.ApplyCompany({user_info});
        console.log("Apply success");

        res.status(CREATED).json({
          message: '회사 지원 성공',
          list : info,
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '회사 지원 실패',
        });
      }
}
