// const Company = require('../models/company');
const { sequelize } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;   // like를 사용하기 위해

const user_infos = db.user_info;
const company_info = db.company_info;

exports.applyCompany = async ({user_info}) => {

    try {
        
        // 공고가 존재하는 공고인지 확인하는 로직
        let noticeCheck = await company_info.findOne({
            where: {
                공고_id: user_info.공고_id,
            }
        })
        if (noticeCheck){  //만약 실제로 있는 공고라면?
            
            //이전에 지원한 적이 있는지 검증하는 로직
            let applyCheck = await user_infos.findOne({
                where: {
                    사용자_id: user_info.사용자_id,
                }
            })
            // 지원한적이 없는 경우... -> 첫 지원
            if (!applyCheck) {
                const User = await user_infos.create({
                    공고_id: user_info.공고_id,
                    사용자_id: user_info.사용자_id,
                    지원여부 : true,
                });

                return User;

            }
            else{   
               return false
            }
        }
        else{
            return false
        }
        
    }
    catch (err) {
        console.log(err);
    }
};