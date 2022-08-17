module.exports = (sequelize, Sequelize) => {
	const notices = sequelize.define("notices", {
        공고_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        공고목록: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            
        },
	});

	return notices
};