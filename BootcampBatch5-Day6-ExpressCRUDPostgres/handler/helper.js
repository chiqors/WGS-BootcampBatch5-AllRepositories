const contact = require('../models/contactModel')
const validator = require('validator');

async function validateName(name, old_name = null) {
    const errors = []
    if (old_name === null) {
        // Check empty name
        if (validator.isEmpty(name)) {
            const flashObject = {
                type: 'danger',
                message: 'Name is required'
            }
            errors.push(flashObject)
        }
        // Check duplicate name
        const checkDuplicate = (await contact.getContactByName(name)).rows.length > 0 // true or false
        if (checkDuplicate) {
            const flashObject = {
                type: 'danger',
                message: 'Name is already exist'
            }
            errors.push(flashObject)
        }
    } else {
        // skip name validation if name is not inputted
        if (!validator.isEmpty(name)) {
            // Check duplicate name
            const checkDuplicate = (await contact.getContactByName(name)).rows.length > 0 // true or false
            if (checkDuplicate) {
                const flashObject = {
                    type: 'danger',
                    message: 'Name is already exist'
                }
                errors.push(flashObject)
            }
        }
    }
    return errors
}

async function validateEmail(email) {
    let flashObject = {}
    // Check empty email
    if (!validator.isEmail(email)) {
        flashObject = {
            type: 'danger',
            message: 'Email is not valid'
        }
    }
    return flashObject
}

async function validatePhone(phone) {
    let flashObject = {}
    // Check empty phone
    if (!validator.isEmpty(phone)) {
        if (!validator.isMobilePhone(phone, 'id-ID')) {
            flashObject = {
                type: 'danger',
                message: 'Phone is not valid'
            }
        }
    }
    return flashObject
}

async function validateAll(data, old_name = null) {
    const checkName = await validateName(data.name, old_name)
    const checkEmail = await validateEmail(data.email)
    const checkPhone = await validatePhone(data.mobile)
    let errors = []
    if (checkName.length > 0) {
        errors.push(...checkName)
    }
    if (Object.keys(checkEmail).length > 0) {
        errors.push(checkEmail)
    }
    if (Object.keys(checkPhone).length > 0) {
        errors.push(checkPhone)
    }
    return errors
}

module.exports = {
    validateName,
    validateEmail,
    validatePhone,
    validateAll
}