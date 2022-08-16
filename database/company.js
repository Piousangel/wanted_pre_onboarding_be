// const Company = require('../models/company');
const db = require("../models");
const company_info = db.company_info;  //models의 index.js에 있는 db.company_info랑 맞춰줘야해! create 안되었던 이유

exports.createCompany = async ({com_info}) => {
    try {
        const company = await company_info.create({
            회사_id: com_info.회사_id,
            채용포지션: com_info.채용포지션,
            채용보상금: com_info.채용보상금,
            채용내용: com_info.채용내용,
            사용기술: com_info.사용기술,
        });
    }
    catch (err) {
        console.log(err);
    }
};

exports.updateCompany = async ({com_info}) => {
    try {
        console.log("업데이트 로직");
        const company_id = com_info.회사_id;

        company_info.update({
            회사_id: com_info.회사_id,
            채용포지션: com_info.채용포지션,
            채용보상금: com_info.채용보상금,
            채용내용: com_info.채용내용,
            사용기술: com_info.사용기술,

            where: {회사_id: company_id},
        })
    }
    catch (err) {
        console.log(err);
    }
};

//삭제로직은 destroy 함수를 사용하네요!
exports.deleteCompany = async (회사_id) => {
    try {
        console.log("삭제 로직");
        const company_id = 회사_id;

        company_info.destroy({
            where: {회사_id: company_id},
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


  

//return await company_info.create({ '회사_id': 회사_id }).exec();
// exports.upsert = async ({filter, update}) => {
// return await User.findOneAndUpdate(filter, update, {
//     new: true,
//     upsert: true
// });
// }