import mongoose from 'mongoose';
require('../tools/connect');

const PaperList = mongoose.model('PaperList', {
    name: String,
    description: String,
    sections: [{
        title: String,
        types: String,
        index:Number,
        content:[]
    }]
});

module.exports = PaperList;