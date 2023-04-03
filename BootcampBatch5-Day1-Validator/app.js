// require readline
const readline = require('readline');
const validator = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask question
rl.question('Nama? ', (nama) => {
    rl.question('Email? ', (email) => {
        rl.question('NoTelp? ', (notelp) => {
            if (!validator.isEmail(email)) {
                console.log('Email anda tidak valid!');
            } else if (!validator.isMobilePhone(notelp, 'id-ID')) {
                console.log('NoTelp anda tidak valid!');
            } else {
                console.log(`Terimakasih ${nama} sudah memasukkan data!`);
            }
            rl.close();
        });
    });
});