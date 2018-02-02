import Homework from '../server/models/Homework';

module.exports = {
    get: (req, res, next) => {
        Homework.findOne({},(err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    }
};