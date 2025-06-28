const crypto = require('crypto');
const DataModel = require('../models/LearningData'); 

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
                return res.status(400).json({ message: `Unexpected ID collision. Please try again.` });
            }

            const newData = await DataModel.create({
                id: dataId,
                main_title,
                subject,
                cetogray,
                desc,
                link
            });

            return res.status(201).json({
                message: 'Data added successfully',
                data: newData
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err.message
            });
        }
    }, 

    get_alldata: async(req, res) => {
        try{
            const alldata = await DataModel.findAll()

            return res.json({ Result: alldata })
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = DataController;
