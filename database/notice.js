// const Company = require('../models/company');
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;   

const notices = db.notices;


// DB 수정
exports.updateCompany = async ({com_group}) => {
    try {
        console.log("업데이트 로직");
        const notice_id = com_info.공고_id;

        
        
        //기존의 것에 새로 추가가 아니라 com_info로 update
        const notice_list = notices.findOne({
            attributes : ['공고목록'],
            where: {공고_id: notice_id}
        })

        notice_list.push(notice_id)

        console.log("notice_list", notice_list);

        
    }
    catch (err) {
        console.log(err);
    }
};