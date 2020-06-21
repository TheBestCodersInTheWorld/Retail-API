const RetailModel = require('../models/retailModel');

const getStoreSalesInState = (req, res) => {
    RetailModel.getStoreSalesInState(req.body, (err, res) => {
        if (err) {
            res.status(404).json(err.toString());
            throw err;
        } else {
            res.status(200).json({"entries": record.rows});
        }
    })
}