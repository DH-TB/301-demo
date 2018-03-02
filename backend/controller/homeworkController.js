import Homework from '../server/models/Homework';
import result from './common';

module.exports = {
    getHomework: (req, res, next) => {
        Homework.findOne({},(err, data) => {
            if (err)
                return next(err);
            result.handleNotFoundOrData(res,data);
        })
    }
};