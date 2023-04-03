const yargs = require('yargs');
const validator = require('validator');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Contact Email',
            demandOption: false,
            type: 'string'
        },
        mobile: {
            describe: 'Contact Mobile',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile
        };
        main(contact);
    }
});

yargs.parse();

function main(contact) {
    contacts.initData();
    // check if email is empty && invalid
    if (contact.email && !validator.isEmail(contact.email)) {
        console.log('Email is not valid');
        return;
    }
    // check if mobile is invalid
    if (!validator.isMobilePhone(contact.mobile)) {
        console.log('Mobile is not valid');
        return;
    }
    contacts.saveContact(contact.name, contact.email, contact.mobile);
}