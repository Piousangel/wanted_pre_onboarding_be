const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;

const companyServices = require('../../services/company');

const db = require("../../models/");
const company_info = db.company_info;
const Op = db.Sequelize.Op;

exports.createCompany = async (req, res) => {
    try {
        console.log(req.body);

        // const { 회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술 } = req.body;
        
        const com_info = {
            회사_id : req.body.company_id,
            채용포지션 : req.body.recu_position,
            채용보상금 : req.body.recu_bonus,
            채용내용 : req.body.recu_info,
            사용기술 : req.body.skill,
        }

        await companyServices.createCompany({com_info});
        console.log("createCompany success");

        res.status(CREATED).json({
          message: '채용 공고 등록 성공',
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '채용 공고 등록 실패',
        });
      }
}

exports.updateCompany = async (req, res) => {
    try {
        console.log(req.body);

        // const { 회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술 } = req.body;
        
        const com_info = {
            회사_id : req.body.company_id,
            채용포지션 : req.body.recu_position,
            채용보상금 : req.body.recu_bonus,
            채용내용 : req.body.recu_info,
            사용기술 : req.body.skill,
        }

        await companyServices.updateCompany({com_info});
        // console.log("updateCompany success");

        res.status(CREATED).json({
          message: '채용 공고 수정 성공',
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '채용 공고 수정 실패',
        });
      }
}

exports.deleteCompany = async (req, res) => {
    try {
        console.log(req.body);
        회사_id = req.body.company_id;

        await companyServices.deleteCompany(회사_id);
        // console.log("deleteCompany success");

        res.status(CREATED).json({
          message: '채용 공고 삭제 성공',
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '채용 공고 삭제 실패',
        });
      }
}

exports.findAllCompany = async (req, res) => {
    try {
        
        const companies_list = await companyServices.findAllCompany();
        console.log("findAllCompany success");

        res.status(CREATED).json({
          message: '전체 채용 공고 조회 성공',
          list : companies_list,
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '전체 채용 공고 조회 실패',
        });
      }
}

