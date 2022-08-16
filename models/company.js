module.exports = (sequelize, Sequelize) => {
	const company_info = sequelize.define("company_info", {
        공고_id: {
            type: Sequelize.STRING
        },
        회사명: {
            type: Sequelize.STRING
        },
        국가: {
            type: Sequelize.STRING
        },
        지역: {
            type: Sequelize.STRING
        },
        채용포지션: {
            type: Sequelize.STRING
        },
        채용보상금: {
            type: Sequelize.INTEGER
        },
        채용내용: {
            type: Sequelize.STRING
        },
        사용기술: {
            type: Sequelize.STRING
        },
        회사가올린다른채용공고: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        }
	});

	return company_info
};