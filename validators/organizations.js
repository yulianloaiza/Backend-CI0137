const Joi = require("joi");

exports.createOrganizationSchema = Joi.object({
    id: Joi.number.required(),
    name: Joi.string().required(),
    state: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    description: Joi.string().required(),
    images: Joi.array().items(Joi.string().uri()).required()
});