module.exports = (sequelize, Sequelize) => {
	const user_info = sequelize.define("user_info", {
        공고_id: {
            type: Sequelize.STRING
        },
        사용자_id: {
            type: Sequelize.STRING
        }
	});

	return user_info
};