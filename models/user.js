module.exports = (sequelize, Sequelize) => {
	const user_info = sequelize.define("user_info", {
        공고_id: {
            type: Sequelize.STRING
        },
        사용자_id: {
            type: Sequelize.STRING
        },
        지원여부: {
            type: Sequelize.BOOLEAN
        }
	});

	return user_info
};