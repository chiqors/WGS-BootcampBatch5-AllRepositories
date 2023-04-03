const yargs = require('yargs');
const contacts = require('./contacts');

// create multiple yargs command
yargs.command([{
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        name: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: true,
            type: 'string',
        },
        phone: {
            describe: 'Nomor telepon',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.initData();
        contacts.saveContact(argv.name, argv.email, argv.phone);
    },
}, {
    command: 'detail',
    describe: 'Menampilkan detail contact',
    builder: {
        name: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.initData();
        contacts.showContact(argv.name);
    },
}]);

yargs.parse();