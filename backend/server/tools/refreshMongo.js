import mongoose from 'mongoose';
import rawData from './initData';
import PaperList from '../models/Paper';
import Homework from '../models/Homework';
mongoose.Promise = require('bluebird');
require('./connect');

const modelsMap = {
    PaperList,
    Homework,
};
let docs = Object.keys(rawData);

console.log(docs);

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
