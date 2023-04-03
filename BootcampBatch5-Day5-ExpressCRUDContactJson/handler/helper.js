const contact = require('../models/contactModel')
const validator = require('validator');

async function validateName(name) {
    const errors = []
    // Check empty name
    if (validator.isEmpty(name)) {
        const flashObject = {
            type: 'danger',
            message: 'Name is required'
        }
        errors.push(flashObject)
    }
    // Check duplicate name
    const checkDuplicate = contact.getContactByName(name)
    if (checkDuplicate) {
        const flashObject = {
            type: 'danger',
            message: 'Name is already exist'
        }
        errors.push(flashObject)
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

async function validateAll(data, form = 'create') {
    const checkName = await validateName(data.nama)
    const checkEmail = await validateEmail(data.email)
    const checkPhone = await validatePhone(data.notelp)
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