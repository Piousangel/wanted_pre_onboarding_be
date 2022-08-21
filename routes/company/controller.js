const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;

const companyServices = require('../../services/company');
const noticeServices = require('../../services/notice');

const db = require("../../models/");
// const company_info = db.company_info;
const Op = db.Sequelize.Op;

// 공고 생성
exports.createCompany = async (req, res) => {
    try {
        console.log(req.body);
 
        const com_info = {
            공고_id : req.body.notice_id,
            회사명 : req.body.company_name,
            국가 : req.body.country,
            지역 : req.body.region,
            채용포지션 : req.body.recu_position,
            채용보상금 : req.body.recu_bonus,
            채용내용 : req.body.recu_info,
            사용기술 : req.body.skill,
        }

        const com_group = {
            공고_id : req.body.notice_id,
            회사명 : req.body.company_name,
        }

        const createForm = await companyServices.createCompany({com_info});
        console.log("createCompany success");

        console.log("createForm!!!!!!", createForm);

        //회사가 올린 다른 채용공고 추가
        // let temp_set = await noticeServices.syncSameCompany({com_group});

        // await companyServices.addSameCompany({temp_set, com_group});

        res.status(CREATED).json({
          message: '채용 공고 등록 성공',
          form : createForm,
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '채용 공고 등록 실패',
        });
      }
}

// 공고 수정
exports.updateCompany = async (req, res) => {
    try {
        console.log(req.body);

        const com_info = {
          공고_id : req.body.notice_id,
          회사명 : req.body.company_name,
          국가 : req.body.country,
          지역 : req.body.region,
          채용포지션 : req.body.recu_position,
          채용보상금 : req.body.recu_bonus,
          채용내용 : req.body.recu_info,
          사용기술 : req.body.skill,
      }

        await companyServices.updateCompany({com_info});
        // console.log("updateCompany success");

        res.status(CREATED).json({
          message: '채용 공고 수정 성공',
          // form : updateForm,
        });
      } catch (error) {
        res.status(BAD_REQUEST).json({
          message: '채용 공고 수정 실패',
        });
      }
}

// 공고 삭제
exports.deleteCompany = async (req, res) => {
    try {
        console.log(req.body);
        공고_id = req.body.notice_id;

        await companyServices.deleteCompany(공고_id);
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

// 공고 전체 조회
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

// 키워드로 공고 조회
exports.findCompanyIncludeName = async (req, res) => {

    // const { search } = req.params;
    const { search } = req.query;
    // console.log("req.,,,in controller", req);
    console.log("name in controller", search);

    const foundTables = await companyServices.findByName(search);
    if(!foundTables) {
      res.status(CREATED).json({
        message: "해당 단어로 조회가 불가능합니다.",
      });
    }
    else {
        res.status(CREATED).json({
          message: "조회된 채용공고 리스트 입니다.",
          list : foundTables,
        });
    }  
};

