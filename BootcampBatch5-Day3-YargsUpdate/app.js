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
            demandOption: false,
            type: 'string',
        },
        mobile: {
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
},
{
    command: 'list',
    describe: 'Menampilkan semua nama contact',
    handler() {
        contacts.initData();
        contacts.listContact();
    },
},
{
    command: 'delete',
    describe: 'Menghapus contact',
    builder: {
        name: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.initData();
        contacts.deleteWithSplice(argv.name);
    },
},
{
    command: 'update',
    describe: 'Mengupdate contact',
    builder: {
        old_name: {
            describe: 'Nama lama',
            demandOption: true,
            type: 'string',
        },
        name: {
            describe: 'Nama lengkap',
            demandOption: false,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        mobile: {
            describe: 'Nomor telepon',
            demandOption: false,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.initData();
        contacts.updateContact(argv.old_name, argv.name, argv.email, argv.phone);
    },
}]);

yargs.parse();