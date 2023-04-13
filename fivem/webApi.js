// Created By JustGreg (Greg)
// Made with awful fivem js documentation <3

const config = require('../config.json')
const crypto = require('crypto-js');

exports.encrypt = function(data) {
    if (config.debug) {
        console.log('Decrpytion Key used: ' + config.webAccessToken)
        console.log('Incoming Data to Decrypt: ' + data)
    }
    return crypto.AES.encrypt(data, config.webAccessToken).toString();
}

exports.decrypt = function(data) {
    if (config.debug) {
        console.log('Decrpytion Key used: ' + config.webAccessToken)
        console.log('Incoming Data to Decrypt: ' + data)
    }

    return crypto.AES.decrypt(data, config.webAccessToken).toString(crypto.enc.Utf8)
}