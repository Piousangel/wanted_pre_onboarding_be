// const Company = require('../models/company');
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;   // like를 사용하기 위해
const user_info = db.user_info;  //models의 index.js에 있는 db.company_info랑 맞춰줘야해! create 안되었던 이유

exports.ApplyCompany = async ({user_info}) => {
    try {
        
        // 회사가 존재하는 회사인지, 한번만 지원했는지 검증하는 로직이 필요합니다.

        const User = await user_info.create({
            공고_id: user_info.공고_id,
            사용자_id: user_info.회사명,
        });
    }
    catch (err) {
        console.log(err);
    }
};