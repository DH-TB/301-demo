import mongoose from 'mongoose';
import rawData from './initData';
import Paper from '../models/Paper';
import Homework from '../models/Homework';
mongoose.Promise = require('bluebird');

const modelsMap = {
    Paper,
    Homework,
};

let docs = Object.keys(rawData);

console.log(docs);

mongoose.connect('mongodb://127.0.0.1:27017/paper');

Object.keys(rawData).forEach(v => {
    modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
            docs = docs.filter(doc => doc !== v);
            console.log(`The data of ${v} created`);
            if (docs.length === 0) {
                console.log(`All data refreshed`);
                process.exit(0);
            }
        });
    });
});
