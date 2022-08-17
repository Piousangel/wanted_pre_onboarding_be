const Company = require('../models/company');
const { applyCompany } = require('../database/user');


//공고 생성 로직
exports.applyCompany = async ({user_info}) => {
    
    return await applyCompany({user_info});
};
