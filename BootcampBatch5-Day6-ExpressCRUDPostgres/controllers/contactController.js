const contact = require('../models/contactModel')
const helper = require('../handler/helper')

async function index(req, res) {
    const contacts = (await contact.getAllContacts()).rows
    const flashData = await req.consumeFlash('info')
    res.render('contact', {
        contacts,
        flashData,
        title: 'Contact Page'
    })
}

async function create(req, res) {
    const flashData = await req.consumeFlash('info') || {}
    res.render('contact/create', {
        flashMessage: flashData,
        title: 'Add Contact Page'
    })
}

async function store(req, res) {
    const data = req.body
    const errors = await helper.validateAll(data)
    if (errors.length > 0) {
        await req.flash('info', errors)
        const flashData = await req.consumeFlash('info')
        console.log(flashData[0])
        res.status(400)
        return res.render('contact/create', {
            flashMessage: flashData[0],
            title: 'Add Contact Page'
        })
    }
    await contact.storeContact(data)
    const flashObject = {
        type: 'success',
        message: 'Contact has been added'
    }
    await req.flash('info', flashObject)
    return res.redirect('/contact')
}

async function show(req, res) {
    const contactData = (await contact.getContactByName(req.params.name)).rows[0]
    res.render('contact/show', {
        contact: contactData,
        title: 'Show Contact Page'
    })
}

async function edit(req, res) {
    const contactData = (await contact.getContactByName(req.params.name)).rows[0]
    const flashData = await req.consumeFlash('info') || {}
    res.render('contact/edit', {
        flashMessage: flashData,
        contact: contactData,
        title: 'Edit Contact Page'
    })
}

async function update(req, res) {
    const data = req.body
    const errors = await helper.validateAll(data, data.old_name)
    if (errors.length > 0) {
        await req.flash('info', errors)
        const flashData = await req.consumeFlash('info')
        console.log(flashData[0])
        const contactData = (await contact.getContactByName(req.body.old_name)).rows[0]
        res.status(400)
        return res.render('contact/edit', {
            contact: contactData,
            flashMessage: flashData[0],
            title: 'Add Contact Page'
        })
    }
    // if data.name is undefined then use data.old_name
    data.name = data.name || data.old_name
    await contact.updateContact(data)
    const flashObject = {
        type: 'success',
        message: 'Contact has been updated'
    }
    await req.flash('info', flashObject)
    res.redirect('/contact')
}

async function destroy(req, res) {
    const data = req.body
    const flashObject = {
        type: 'success',
        message: 'Contact has been deleted'
    }
    await req.flash('info', flashObject)
    await contact.deleteContact(data)
    res.redirect('/contact')
}

module.exports = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
}