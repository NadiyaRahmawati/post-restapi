const Joi = require('joi')
const { schema } = require('../models/Post')
const registerValidation = (data) => {
    const Schema = Joi.object({
        username: Joi.object().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
