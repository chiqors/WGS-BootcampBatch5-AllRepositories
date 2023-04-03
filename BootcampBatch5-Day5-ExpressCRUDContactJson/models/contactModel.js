const fileData = require('../handler/fileData')

function getContactByName(nama) {
    const dataContact = fileData.loadData()
    const contact = dataContact.find((contact) => contact.nama === nama)
    return contact
}

function storeContact(data) {
    const dataContact = fileData.loadData()
    dataContact.push(data)
    fileData.saveData(dataContact)
}

function updateContact(data) {
    const dataContact = fileData.loadData()
    const index = dataContact.findIndex((contact) => contact.nama === data.nama_lama)
    if (data.nama) dataContact[index].nama = data.nama
    if (data.email) dataContact[index].email = data.email
    if (data.notelp) dataContact[index].notelp = data.notelp
    fileData.saveData(dataContact)
}

function deleteContact(data) {
    const dataContact = fileData.loadData()
    const index = dataContact.findIndex((contact) => contact.nama === data.nama)
    dataContact.splice(index, 1)
    fileData.saveData(dataContact)
}

module.exports = {
    getContactByName,
    storeContact,
    updateContact,
    deleteContact
}