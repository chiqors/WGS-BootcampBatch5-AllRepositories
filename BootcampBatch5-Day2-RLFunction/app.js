const readline = require('readline');
const fs = require('fs');
const validator = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// check if directory data exists then create folder

const dirPath = './data';
const dataPath = './data/contacts.json';

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    // if contacts.json not exists then create file
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, '[]', 'utf-8');
    }
}

// create a function for asking question
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const main = async () => {
    let nama = await ask('Nama? ');
    let email = await ask('Email? ');
    let notelp = await ask('NoTelp? ');
    while (!validator.isEmail(email)) {
        console.log('Email anda tidak valid!');
        email = await ask('Email? ');
    }
    while (!validator.isMobilePhone(notelp, 'id-ID')) {
        console.log('NoTelp anda tidak valid!');
        notelp = await ask('NoTelp? ');
    }
    console.log(`Terimakasih ${nama} sudah memasukkan data!`);
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    data.push({ nama, email, notelp });
    fs.writeFileSync(dataPath, JSON.stringify(data));
    rl.close();
}

main();