module.exports = (sequelize, Sequelize) => {
	const company_info = sequelize.define("company_info", {
		회사_id: {
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
        }
	});

	return company_info
};