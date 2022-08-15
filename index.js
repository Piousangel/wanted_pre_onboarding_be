const express = require("express");

const bodyParser = require("body-parser");

const connect = require("./database/connection");

const apiRouter = require("./routes");

const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use("/api", apiRouter);

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.use(function (error, req, res, next){
    res.status(BAD_REQUEST).json({ message : error.message })
})