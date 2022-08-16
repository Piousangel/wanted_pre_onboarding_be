const express = require("express");
const { OK, CREATED, BAD_REQUEST } = require('./config/statusCode').statusCode;
const bodyParser = require("body-parser");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const db = require("./models");

// const connect = require("./database/connection");
const apiRouter = require("./routes");

const app = express();
const http = require("http");
const server = http.createServer(app);

// var corOptions = {
//   origin: "http://localhost:5000",
// };

// app.use(cors(corOptions));
app.use(cors());

// connect(app);  //postgresql과 연결 -> 데이터 베이스 연결 성공 뜨면 된거에용~

db.sequelize.sync();  //sequelize.sync() 동기화!

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// app.use(cookieParser());


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// set port, listen for requests
const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on Port ${PORT}!`);
// });

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

app.use("/api", apiRouter);

// app.use(function (error, req, res) {
//     res.status(BAD_REQUEST).json({ message: error.message })
// })
