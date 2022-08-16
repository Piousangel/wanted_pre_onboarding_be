// const Company = require('../models/company');
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;   // like를 사용하기 위해
const company_info = db.company_info;  //models의 index.js에 있는 db.company_info랑 맞춰줘야해! create 안되었던 이유

exports.createCompany = async ({com_info}) => {
    try {
        const company = await company_info.create({
            공고_id: com_info.공고_id,
            회사명: com_info.회사명,
            국가: com_info.국가,
            지역: com_info.지역,
            채용포지션: com_info.채용포지션,
            채용보상금: com_info.채용보상금,
            채용내용: com_info.채용내용,
            사용기술: com_info.사용기술,
            회사가올린다른채용공고: [],
        });
    }
    catch (err) {
        console.log(err);
    }
};

// 회사가 올린다른채용공고에 추가하기
exports.groupingCompany = async ({com_group}) => {
    try {

        //포문을 돌며 추가해야할 듯...
        company_info.update({ 
            회사가올린다른채용공고 : sequelize.fn('array_append', sequelize.col('회사가올린다른채용공고'), com_group.공고_id)}, 
            { where: {회사명: com_group.회사명}},
        );
    }
    catch (err) {
        console.log(err);
    }
}

// DB 수정
exports.updateCompany = async ({com_info}) => {
    try {
        console.log("업데이트 로직");
        const notice_id = com_info.공고_id;

        //기존의 것에 새로 추가가 아니라 com_info로 update
        company_info.update(com_info, {
            where: {공고_id: notice_id},
        })
    }
    catch (err) {
        console.log(err);
    }
};

//삭제로직은 destroy 함수를 사용하네요!
exports.deleteCompany = async (공고_id) => {
    try {
        console.log("삭제 로직");
        const notice_id = 공고_id;

        company_info.destroy({
            where: {공고_id: notice_id},
        })
    }
    catch (err) {
        console.log(err);
    }
};

exports.findAllCompany = async () => {
    try {
        console.log("전체 공고 찾는 로직");
        
        const allCompanies = company_info.findAll();
        return allCompanies;
    }
    catch (err) {
        console.log(err);
    }
}

// 키워드로 공고를 찾는 로직
exports.findAllNoitce = async (search) => {
    try {
        console.log("해당 이름으로 공고 찾는 로직");
        console.log("name : ", search);
        const searchVar = search;

        let search_result = await company_info.findAll({
            where: {
                회사명: {
                    [Op.like]: `%${searchVar}`
                }
            }
        })

        return search_result;
    }
    catch (err) {
        console.log(err);
    }
}