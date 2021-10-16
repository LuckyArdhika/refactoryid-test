#! /usr/bin/env node
// beta ver
const { hideBin } = require('yargs/helpers')
const yargs = require("yargs");
const argv = yargs(hideBin(process.argv)).argv
const mongoose = require('mongoose');
const usersSchema = require('../models/user');

async function command() {
    await mongoose.connect("mongodb+srv://training:PJYoyZW6kFod53Gn@clustertrainee.3u2r4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database sucessfully connected!')
    }).catch(err => {
        console.log('Could not connect to database : ' + err)
    })

    if (argv.s) {
        console.log('Fetching all data user...');
        usersSchema.find((error, data) => {
            if (error) {
              return next(error);
            } else {
              console.log(data);
              process.exit(1);
            }
          })
    } else if (argv.h) {
        console.log('Usage: showd <command>');
        console.log('Command list:');
        console.log('          -s => to show all user registered and their data');
        console.log('          -q => to show all data from top user');
        process.exit(1);
    } else if (argv.q) {
        console.log('Fetching top user data...')
        usersSchema.find((error, data) => {
            if (error) {
              return next(error);
            } else {
              console.log(data[0]);
              process.exit(1);
            }
          })
    } else {
        console.log('please type $ showd -h to show supported command');
        process.exit(1);
    }
}
command();
