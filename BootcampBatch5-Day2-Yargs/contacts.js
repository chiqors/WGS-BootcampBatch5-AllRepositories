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

function saveContact(name, email, phone) {
    const contact = { name, email, phone };
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    rl.close();
}

module.exports = {
    initData,
    question,
    saveContact
};