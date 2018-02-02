import Paper from '../server/models/Paper';

module.exports = {
    getAll: (req, res, next) => {
        Paper.findOne({}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    post: (req, res, next) => {
        Paper.findOne({}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    get: (req, res, next) => {
        Paper.findOne({}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    put: (req, res, next) => {
        Paper.findOne({}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    del: (req, res, next) => {
        Paper.findOne({}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    }
};