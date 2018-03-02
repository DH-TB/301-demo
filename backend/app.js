import express from 'express';
import bodyParser from 'body-parser';
import route from './server/routers';

const app = express();
app.use(bodyParser.json());

require('./server/tools/connect');uuu--=
app.use(route);

app.listen(8888, function () {
    console.log('server started at http://localhost:8888');
});

module.exports = app;