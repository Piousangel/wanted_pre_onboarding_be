const Company = require('../models/company');
const { createCompany } = require('../database/company');

exports.createCompany = async ({ 회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술}) => {
    return await createCompany({회사_id, 채용포지션, 채용보상금, 채용내용, 사용기술});
};