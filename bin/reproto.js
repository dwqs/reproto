#!/usr/bin/env node

var fs = require('fs');

var pwd = require('../src/index')();
var savedPath = process.cwd() + '/reproto.txt';

fs.writeFile(savedPath, pwd, 'utf8',function (err) {
    try{
        if (err) {
            throw err;
        }
        console.log('password was saved success, and path was ',savedPath);
    } catch (err){
        console.log('password was saved fail.');
    } finally {
        console.log('new password is: ', pwd);
    }
});
