"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var user_1 = require("../src/user");
describe('Reading data from database', function () {
    var joe;
    beforeEach(function (done) {
        joe = new user_1.User({ name: 'Joe' });
        joe.save()
            .then(function () {
            assert(!joe.isNew);
            done();
        });
    });
    it('find all the users from database named Joe', function (done) {
        user_1.User.find({ name: 'Joe' })
            .then(function (users) {
            assert(users.length === 1);
            assert(users[0].name === 'Joe');
            done();
        });
    });
    it('find a particular user from database', function (done) {
        user_1.User.findOne({ name: 'Joe' })
            .then(function (user) {
            assert(user.name === 'Joe');
            done();
        });
    });
});
