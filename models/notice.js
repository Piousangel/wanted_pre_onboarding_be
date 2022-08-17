module.exports = (sequelize, Sequelize) => {
	const notices = sequelize.define("notices", {
        회사명: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        공고목록: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            
        },
	});

	return notices
};