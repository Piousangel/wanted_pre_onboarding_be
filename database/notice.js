// const Company = require('../models/company');
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;   

const notices = db.notices;


// DB 수정
exports.syncSameCompany = async ({com_group}) => {
    try {
        console.log("업데이트 로직");
        const 회사이름 = com_group.회사명;

        //기존의 것에 새로 추가가 아니라 com_info로 update

        await notices.upsert({
            회사명 : com_group.회사명,
            공고목록 : [com_group.공고_id]
        })

        // let notice_list = await notices.findOne({
        //     attributes : ['공고목록'],
        //     where: {회사명: 회사이름}
        // })

        // let updateNotice = notices.update(notice_list, {
        //     attributes : ['공고목록'],
        //     where: {회사명: 회사이름},
        // })

        return updateNotice;

    }
    catch (err) {
        console.log(err);
    }
};