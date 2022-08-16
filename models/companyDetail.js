module.exports = (sequelize, Sequelize) => {
	const company_detail = sequelize.define("company_detail", {
		채용공고_id: {
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
        사용기술: {
            type: Sequelize.STRING
        }

	});

	return company_info
};