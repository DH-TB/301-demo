import express from 'express';
import mongoose from 'mongoose';

const app = express();

import Homework from './server/models/Homework';

mongoose.connect('mongodb://localhost:27017/paper');
// db.connection.on("open", function () {
//     console.log("数据库连接成功");
// });
//
// db.connection.on("error", function (error) {
//     console.log("数据库连接失败：" + error);
// });

app.use('./server/routers');

app.listen(8888, function () {
    console.log('server started at http://localhost:8888');
});

module.exports = app;


