const Joi = require("joi");

exports.createAnimalSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    images: Joi.array().items(Joi.string().uri()).required(),
    gender: Joi.string().required(),
    size: Joi.string().required(),
    years: Joi.number().required(),
    description: Joi.string().required(),
    organization: Joi.string().required(),
    numberOfViews: Joi.number().required(),
    state: Joi.string().required()
});