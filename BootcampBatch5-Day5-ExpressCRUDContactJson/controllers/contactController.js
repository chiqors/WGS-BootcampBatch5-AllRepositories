const contact = require('../models/contactModel')
const fileData = require('../handler/fileData')
const helper = require('../handler/helper')

async function index(req, res) {
    const contacts = fileData.loadData()
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
    contact.storeContact(data)
    const flashObject = {
        type: 'success',
        message: 'Contact has been added'
    }
    await req.flash('info', flashObject)
    return res.redirect('/contact')
}

async function show(req, res) {
    const contactData = contact.getContactByName(req.params.name)
    res.render('contact/show', {
        contact: contactData,
        title: 'Show Contact Page'
    })
}

async function edit(req, res) {
    const contactData = contact.getContactByName(req.params.name)
    const flashData = await req.consumeFlash('info') || {}
    res.render('contact/edit', {
        flashMessage: flashData,
        contact: contactData,
        title: 'Edit Contact Page'
    })
}

async function update(req, res) {
    const data = req.body
    const errors = await helper.validateAll(data)
    if (errors.length > 0) {
        await req.flash('info', errors)
        const flashData = await req.consumeFlash('info')
        console.log(flashData[0])
        const contactData = contact.getContactByName(req.body.nama_lama)
        res.status(400)
        return res.render('contact/edit', {
            contact: contactData,
            flashMessage: flashData[0],
            title: 'Add Contact Page'
        })
    }
    contact.updateContact(data)
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
    contact.deleteContact(data)
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