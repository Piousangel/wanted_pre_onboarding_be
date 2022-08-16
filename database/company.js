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
  

//return await company_info.create({ '회사_id': 회사_id }).exec();
// exports.upsert = async ({filter, update}) => {
// return await User.findOneAndUpdate(filter, update, {
//     new: true,
//     upsert: true
// });
// }