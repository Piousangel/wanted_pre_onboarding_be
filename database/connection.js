const express = require("express");
const app = express();
let pg = require('pg');

async function connect(app) {
    const client = new pg.Client({
        user:'test_user',
        host:'localhost',
        database:'testdb',
        password:'test_password',
        port:5432
    });

    await client.connect(function(err){
        if(err != null){
            console.error('## 데이터 베이스 연결 실패');
            console.error(err.stack);
        }
        else{
            console.log("데이터 베이스  연결 성공");
        }
    });

    app.set('pg_client', client);
}


// let client = app.get('pg_client');
// let sql = "select * from testdb;"

// client.query(sql).then(function(result){
//     console.log("데이터 베이스 연결 성공");
//     console.log(result);
// }).catch(function(err){
//     console.error("## 데이터 베이스 연결 실패");
//     console.error(err.stack);
// });

module.exports = connect;





// const {Pool} = require('pg');
// const pg = new Pool({
//     user: 'postgres',   // username
//     host: 'localhost',  // hostname
//     database:'postgres', // database name
//     password : '1234',  // pw
//     port : 5432         // port number
// })

// pg.connect(err =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("DB연결 성공")
//     }
// })