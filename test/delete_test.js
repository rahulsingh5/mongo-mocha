"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var user_1 = require("../src/user");
describe('Remove data from database', function () {
    var joe;
    beforeEach(function (done) {
        joe = new user_1.User({ name: 'Joe' });
        joe.save()
            .then(function () {
            assert(!joe.isNew);
            done();
        });
    });
    it('Model Instance - remove method', function (done) {
        joe.remove({ name: 'Joe' })
            .then(function () { return user_1.User.findOne({ name: 'Joe' }); })
            .then(function (user) {
            assert(user === null);
            done();
        });
    });
    it('Model Class - remove method', function (done) {
        user_1.User.remove({ name: 'Joe' })
            .then(function () { return user_1.User.find({ name: 'Joe' }); })
            .then(function (users) {
            assert(users.length === 0);
            done();
        });
    });
    it('Model Class - findOneAndRemove method', function (done) {
        user_1.User.findOneAndRemove({ name: 'Joe' })
            .then(function () { return user_1.User.find({ name: 'Joe' }); })
            .then(function (users) {
            assert(users.length === 0);
            done();
        });
    });
    it('Model Class - findByIdAndRemove method', function (done) {
        user_1.User.findByIdAndRemove({ _id: joe._id })
            .then(function () { return user_1.User.find({ name: 'Joe' }); })
            .then(function (user) {
            assert(user.length === 0);
            done();
        });
    });
});
