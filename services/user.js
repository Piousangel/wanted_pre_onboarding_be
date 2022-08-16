const Company = require('../models/company');
const { ApplyCompany } = require('../database/user');


//공고 생성
exports.ApplyCompany = async ({user_info}) => {
    
    return await ApplyCompany({user_info});
};
