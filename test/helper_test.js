"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
before(function (done) {
    mongoose.connect('mongodb://localhost:27017/users_test');
    mongoose.connection
        .once('open', function () {
        console.log('Good to go!');
        done();
    })
        .on('error', function (error) { return console.error("Error " + error); });
});
beforeEach(function (done) {
    mongoose.connection.collections.users.drop(function () { return done(); });
});
