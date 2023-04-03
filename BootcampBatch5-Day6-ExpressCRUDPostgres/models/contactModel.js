const db = require('../handler/db')

async function getAllContacts() {
    const dataContact = await db.query('SELECT * FROM contacts')
    return dataContact
}

async function getContactByName(name) {
    const dataContact = await db.query(`SELECT * FROM contacts WHERE name = '${name}'`)
    return dataContact
}

async function storeContact(data) {
    const dataContact = await db.query(`INSERT INTO contacts (name, email, mobile) VALUES ('${data.name}', '${data.email}', '${data.mobile}') RETURNING *`)
    return dataContact
}

async function updateContact(data) {
    const dataContact = await db.query(`UPDATE contacts SET name = '${data.name}', email = '${data.email}', mobile = '${data.mobile}' WHERE name = '${data.old_name}' RETURNING *`)
    return dataContact
}

async function deleteContact(data) {
    const dataContact = await db.query(`DELETE FROM contacts WHERE name = '${data.name}'`)
    return dataContact
}

module.exports = {
    getAllContacts,
    getContactByName,
    storeContact,
    updateContact,
    deleteContact
}