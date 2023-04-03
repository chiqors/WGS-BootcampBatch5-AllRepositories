const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function question(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

function showContact(name) {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    const contact = contacts.find((ct) => ct.name.toUpperCase() === name.toUpperCase());
    if (!contact) {
        rl.close();
        console.log('Contact tidak ditemukan!');
        return false;
    }
    rl.close();
    if (contact.name) console.log('Nama: ', contact.name);
    if (contact.email) console.log('Email: ', contact.email);
    if (contact.phone) console.log('No. Telepon: ', contact.phone);
}

function listContact() {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    console.log('Contact list:');
    let i = 1;
    contacts.forEach((contact) => {
        console.log(`${i}. ${contact.name} - ${(contact.email) ? contact.email+' - ' : ''}${contact.phone}`);
        i++;
    });
    rl.close();
}

function saveContact(name, email, phone) {
    const contact = { name, email, phone };
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
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
    question,
    showContact,
    listContact,
    saveContact
};