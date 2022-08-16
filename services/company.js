const Company = require('../models/company');
const { createCompany } = require('../database/company');

exports.createCompany = async ({com_info}) => {
    console.log("000000");
    return await createCompany({com_info});
    
};