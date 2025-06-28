const crypto = require('crypto');
const DataModel = require('../models/LearningData');
const path = require('path')
const fs = require('fs')

const DataController = {
    add_data: async (req, res) => {
        try {
            const {
                main_title,
                subject,
                cetogray,
                desc,
                link
            } = req.body;

            const dataId = crypto.randomUUID();

            const exists = await DataModel.findById({ id: dataId });
            if (exists) {
                return res.json({ message: `Unexpected ID collision. Please try again.` });
            }

            const newData = await DataModel.create({
                id: dataId,
                main_title,
                subject,
                cetogray,
                desc,
                link
            });

            return res.json({
                message: 'Data added successfully',
                data: newData
            });
        } catch (err) {
            console.error(err);
            return res.json({
                message: 'Internal Server Error',
                error: err.message
            });
        }
    },

    get_alldata: async (req, res) => {
        try {
            const sourceFile = path.join(__dirname, '../data/Data.json');
            fs.readFile(sourceFile, 'utf8', (err, data) => {
                if (err) {
                    return res.json({ Error: "No Data found..." });
                }
                try {
                    const jsondata = JSON.parse(data);
                    return res.json({ Status: "Success", Result: jsondata });
                } catch (parseErr) {
                    return res.json({ Error: "Data parsing error" });
                }
            });
        } catch (err) {
            console.log(err);
            return res.json({ Error: "Internal server error" });
        }
    },
};

module.exports = DataController;
