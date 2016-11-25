/**
 * generate random password
 * it accepts a param(must be a number and in [8,15]) as the length of password.
 */

(function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        global.reproto = factory;
    }
}(this, function() {
    'use strict';

    var length = 10;

    if(typeof parseInt(process.argv[2]) === 'number' && !isNaN(parseInt(process.argv[2]))){
        var l = parseInt(process.argv[2]);
        if(l >= 10 && l <= 15){
            length = l;
        }
    }

    var string = "abcdefghijklmnopqrstuvwxyz";
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    var password = "";
    var character = "";

    var entity1 = "";
    var entity2 = "";
    var entity3 = "";
    var hold = "";

    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());

        hold = string.charAt( entity1 );
        hold = (entity1%2==0)?(hold.toUpperCase()):(hold);

        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );

        password = character;
    }
    return password.length === length ? password.length : password.slice(0,length);
}));
