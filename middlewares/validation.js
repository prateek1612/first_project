const Joi = require('@hapi/joi');

const employeeSchema = Joi.object({
    employee_name: Joi.string().min(2).max(100).required(),
    gender : Joi.string().valid('male','female').required(),
    address_1: Joi.string().min(2).max(100).trim().regex(/^[a-z\d\s\-\.\,]*$/i).required(),
    city: Joi.string().min(1).max(100).required(),
    state: Joi.string().min(2).max(100).required(),
    country: Joi.number().integer().required(),
    is_active : Joi.boolean().default(true)

}).unknown(true);


const updateSchema = Joi.object({
    employee_name: Joi.string().min(2).max(100),
    gender : Joi.string().valid('male','female'),
    address_1: Joi.string().min(2).max(100).trim().regex(/^[a-z\d\s\-\.\,]*$/i),
    city: Joi.string().min(1).max(100),
    state: Joi.string().min(2).max(100),
    country: Joi.number().integer(),
    is_active : Joi.boolean().default(true)

}).unknown(true);
const validateForNew = () => {
    return (req, res, next) => {

        const { value, error } = employeeSchema.validate(req.body);
        const valid = error == null;

        if (valid) {
            next();
        } else {
           
            console.log('error2', error.message);
            res.status(422).json({ erro: error.message });
        }
    };

}
const validateForUpdate = () => {
    return (req, res, next) => {

        const { value, error } = updateSchema.validate(req.body);
        console.log('error1', value);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            //const { details } = error;
            console.log('error2', error.message);
            res.status(422).json({ erro: error.message });
        }
    };

}

module.exports =
{
    validateForNew,
    validateForUpdate

}
