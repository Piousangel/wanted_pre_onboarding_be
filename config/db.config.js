module.exports = {
	host: "localhost",
  	user: "test_user",
  	// password에는 설치할때 설정한 비밀번호 입력!
  	password: "test_password",
  	database: "testdb",
  	dialect: "postgres",
  	pool: {
		max: 5,
  		min: 0,
  		acquire: 30000,
  		idle: 10000
	}
};