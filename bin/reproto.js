#!/usr/bin/env node

var fs = require('fs');

var pwd = require('../src/index')();
var savedPath = process.cwd() + '/password.txt';

fs.writeFile(savedPath, pwd, function (err) {
    try{
        if (err) {
            throw err;
        }
        console.log('password was saved success, and path was ',savedPath);
    } catch (err){
        console.log('password was saved fail.');
    } finally {
        console.log('new password:', pwd);
    }
});
