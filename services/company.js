const Company = require('../models/company');
const { createCompany, updateCompany, deleteCompany, findAllCompany, findAllNoitce } = require('../database/company');


//공고 생성
exports.createCompany = async ({com_info}) => {
    
    return await createCompany({com_info});
    
};

//공고 수정
exports.updateCompany = async ({com_info}) => {

    return await updateCompany({com_info});
    
};

//공고 삭제
exports.deleteCompany = async (회사_id) => {

    return await deleteCompany(회사_id);
}

// 공고 전체 조회
exports.findAllCompany = async () => {

    return await findAllCompany();
}

// 해당 단어로 모든 공고 조회
exports.findByName = async(search) => {

    return await findAllNoitce(search);
}