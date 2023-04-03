const fs = require('fs');

const dirPath = './data';
const dataPath = './data/contacts.json';

function initData() {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        if (!fs.existsSync(dataPath)) {
            fs.writeFileSync(dataPath, '[]', 'utf-8');
        }
    }
}

function showContact(name) {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    const contact = contacts.find((ct) => ct.name.toUpperCase() === name.toUpperCase());
    if (!contact) {
        console.log('Contact tidak ditemukan!');
        return false;
    }
    if (contact.name) console.log('Nama: ', contact.name);
    if (contact.email) console.log('Email: ', contact.email);
    if (contact.phone) console.log('No. Telepon: ', contact.phone);
}

function loadContact() {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

function listContact() {
    const contacts = loadContact();
    console.log('Contact list:');
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.name} - ${(contact.email) ? contact.email+' - ' : ''}${contact.phone}`);
    });
}

function deleteContact(name) {
    const contacts = loadContact();
    const newContacts = contacts.filter((contact) => contact.name.toUpperCase() !== name.toUpperCase());
    if (contacts.length === newContacts.length) {
        console.log('Contact tidak ditemukan!');
        return false;
    }
    fs.writeFileSync(dataPath, JSON.stringify(newContacts));
    console.log(`Contact ${name} berhasil dihapus!`);
}

function deleteWithSplice(name) {
    const contacts = loadContact();
    const index = contacts.findIndex((contact) => contact.name.toUpperCase() === name.toUpperCase());
    if (index === -1) {
        console.log('Contact tidak ditemukan!');
        return false;
    }
    contacts.splice(index, 1);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log(`Contact ${name} berhasil dihapus!`);
}

function saveContact(name, email, phone) {
    const contact = { name, email, phone };
    const contacts = loadContact();
    // cek duplikat
    const duplikat = contacts.find((contact) => contact.name.toUpperCase() === name.toUpperCase());
    if (duplikat) {
        console.log('Contact sudah terdaftar, gunakan nama lain!');
        return false;
    }
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
}

module.exports = {
    initData,
    showContact,
    listContact,
    deleteContact,
    deleteWithSplice,
    saveContact
};