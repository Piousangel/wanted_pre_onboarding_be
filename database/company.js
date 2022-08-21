// const Company = require('../models/company');
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;   // like를 사용하기 위해
const company_info = db.company_info;  //models의 index.js에 있는 db.company_info랑 맞춰줘야해! create 안되었던 이유

exports.createCompany = async ({com_info}) => {
    try {

        // console.log("com_info!@#!@#", com_info);

        let company = await company_info.create({
            공고_id: com_info.공고_id,
            회사명: com_info.회사명,
            국가: com_info.국가,
            지역: com_info.지역,
            채용포지션: com_info.채용포지션,
            채용보상금: com_info.채용보상금,
            채용내용: com_info.채용내용,
            사용기술: com_info.사용기술,
            회사가올린다른채용공고: [],
        },
        );

        console.log("dbCompanylog!!!!!!", company);
        return company;
    }
    catch (err) {
        console.log(err);
    }
};

// 간단히 array_append를 정리하자면 update치면서 변경할 컬럼에 추가하고 싶은 받아온 데이터를 넣어주는 형식
// where 절로 같은 회사끼리만 구분해주구요! 
// 회사가 올린다른채용공고에 추가하기  => notice에 구현
exports.groupingCompany = async ({com_group}) => {
    try {

        // 같은 회사 table의 회사가올린다른채용공고 컬럼에 foreach로 다 추가해줄 예정.
        // let temp_set = [];
        // ========================================================================

        // let temp_set = new Set();
        // await company_info.findAll({
        //     where: {회사명: com_group.회사명},
        //     }).then(function (instances) {
        //         instances.forEach(function (instance){
        //             // 회사가올린다른채용공고.push(instance.공고_id);
        //             // console.log("instance", instance.회사가올린다른채용공고);
        //             console.log("instance.공고_id",instance.공고_id)
        //             console.log("instances!!!!!!!",instances);
        //             // instance.회사가올린다른채용공고.push(com_group.공고_id);
        //             temp_set.add(instance.공고_id);
        //             // if (instance.공고_id.in)
        //     })
        // });
        // return temp_set;

        // ========================================================================
        // company_info.bulkCreate( [] ,{ 
        //     updateOnDuplicate: ["회사가올린다른채용공고"]
        // });
        
        // company_info.update({ 
        //     회사가올린다른채용공고 : sequelize.fn('array_append', sequelize.col('회사가올린다른채용공고'), com_group.공고_id)}, 
        //     { where: { 회사명: com_group.회사명 }},
        // );
    }
    catch (err) {
        console.log(err);
    }
}

// 동기화 작업 구현  => notice에 구현
exports.synCompany = async ({temp_set, com_group}) => {
    try {
        //company_info.update( { where: {회사명: com_group.회사명} },  {회사가올린다른채용공고 : temp_set} );

        // const updateData = temp_set;

        // Array.from(updateData).forEach ( () => {
        // company_info.updateAll( {회사가올린다른채용공고 : updateData}, { where: {회사명: com_group.회사명}})
        // })
        // await company_info.findAll({
        //     where: {회사명: com_group.회사명}
        // }).then((result) => {
        //     // console.log("result!!!!!", result[0]);
           
        // })    
    }
    catch (err) {
        console.log(err);
    }
}

// DB 수정
exports.updateCompany = async ({com_info}) => {
    try {
        console.log("업데이트 로직");
        const notice_id = com_info.공고_id;

        //기존의 것에 새로 추가가 아니라 com_info로 update
        const updateForm = company_info.update(com_info, {
            where: {공고_id: notice_id},
        })

        
    }
    catch (err) {
        console.log(err);
    }
};

//삭제로직은 destroy 함수를 사용하네요!
exports.deleteCompany = async (공고_id) => {
    try {
        console.log("삭제 로직");
        const notice_id = 공고_id;

        company_info.destroy({
            where: {공고_id: notice_id},
        })
    }
    catch (err) {
        console.log(err);
    }
};

exports.findAllCompany = async () => {
    try {
        console.log("전체 공고 찾는 로직");
        
        const allCompanies = company_info.findAll({

            attributes: ['채용공고_id', '회사명', ,'국가','지역','채용포지션', '채용보상금', '사용기술'],
            order: [['채용공고_id', 'ASC']],
        });
        return allCompanies;
    }
    catch (err) {
        console.log(err);
    }
}

// 키워드로 공고를 찾는 로직
exports.findAllNoitce = async (search) => {
    try {
        console.log("해당 이름으로 공고 찾는 로직");
        // console.log("name : ", search);
        const searchVar = search;

        let search_result = await company_info.findAll({

            // attributes: ['채용공고_id', '회사명', ,'국가','지역','채용포지션', '채용보상금', '사용기술'],
            // order: [['채용공고_id', 'ASC']],
            where: {
                회사명: {
                    [Op.like]: `%${searchVar}`
                }
            }
        })

        return search_result;
    }
    catch (err) {
        console.log(err);
    }
}