module.exports = {
    handleNotFoundOrData:(res,data)=>{
        if (!data) {
            return res.sendStatus(404)
        }
        return res.send(data)
    },
    handleNotFoundOrNoContent:(res,data)=>{
        if (!data) {
            return res.sendStatus(404)
        }
        return res.sendStatus(204)
    },
};