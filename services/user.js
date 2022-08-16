const Company = require('../models/company');
const { ApplyCompany } = require('../database/user');


//공고 생성
exports.applyCompany = async ({user_info}) => {
    
    return await applyCompany({user_info});
};
