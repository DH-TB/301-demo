import Paper from '../server/models/Paper';
import result from './common';

module.exports = {
    addPaper: (req, res, next) => {
        const paper = new Paper(req.body);
        paper.save((err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.sendStatus(201)
            }
        })
    },
    getAll: (req, res, next) => {
        Paper.find({}, (err, data) => {
            if (err)
                return next(err);
           result.handleNotFoundOrData(res,data)
        })
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        Paper.findOne({_id: id}, (err, data) => {
            if (err)
                return next(err);
            result.handleNotFoundOrData(res,data)
        })
    },
    deletePaper: (req, res, next) => {
        const id = req.params.id;
        Paper.findOneAndRemove({_id: id}, (err, data) => {
            if (err)
                return next(err);
            result.handleNotFoundOrNoContent(res,data)
        })
    },
    updatePaper: (req, res, next) => {
        const id = req.params.id;
        Paper.update({_id: id}, {
            name:req.body.name
            }, (err, data) => {
            if (err)
                return next(err);
            result.handleNotFoundOrNoContent(res,data)
        })
    }
};