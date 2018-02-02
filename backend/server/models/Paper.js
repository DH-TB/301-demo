import mongoose from 'mongoose';

const Paper = mongoose.model('Paper', {
    name: String,
    description: String,
    sections: [
        {
            type: String,
            title: String,
            definition: {}
        }
    ]
});

module.exports = Paper;