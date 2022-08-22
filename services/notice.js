const Company = require('../models/company');
const { syncSameCompany } = require('../database/notice');

//공고 동기화 로직
exports.syncSameCompany = async ({com_group}) => {
    
    return await syncSameCompany({com_group});
};
