const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// check if directory data exists then create folder
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
    // if contacts.json not exists then create file
    if (!fs.existsSync('data/contacts.json')) {
        fs.writeFileSync('data/contacts.json', '[]', 'utf-8');
    }
}

rl.question('Nama? ', (nama) => {
    rl.question('Email? ', (email) => {
        rl.question('NoTelp? ', (notelp) => {
            console.log(`Terimakasih ${nama} sudah memasukkan data!`);
            const data = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
            data.push({ nama, email, notelp });
            fs.writeFileSync('data/contacts.json', JSON.stringify(data));
            rl.close();
        });
    });
});