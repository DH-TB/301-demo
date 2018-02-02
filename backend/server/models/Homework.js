import mongoose from 'mongoose';

const Homework = mongoose.model('Homework', {
    items: [{
        id: String,
        title: String,
        stack: String
    }],
    totalCount: Number
});

module.exports = Homework;