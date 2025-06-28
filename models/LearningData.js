const Joi = require('joi');
const Model = require('coconutdb');

const DataSchema = Joi.object({
    id: Joi.string(),
    main_title: Joi.string().required(),
    subject: Joi.string().required(),
    cetogray: Joi.string().required(),
    desc: Joi.string().required(),
    link: Joi.string().required()            
});

class DataModel extends Model {
    constructor() {
        super('Data', DataSchema);
    }
}

module.exports = new DataModel();