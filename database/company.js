// const Company = require('../models/company');
const db = require("../models/company");
const company_info = db.company_info;

exports.createCompany = async ({회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술}) => {

    try {
        const company = await company_info.create({
            회사_id: 회사_id,
            채용포지션: 채용포지션,
            채용보상금: 채용보상금,
            채용내용: 채용내용,
            사용기술: 사용기술,
            
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