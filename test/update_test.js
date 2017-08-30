"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var user_1 = require("../src/user");
describe('Update data in the database', function () {
    var joe;
    beforeEach(function (done) {
        joe = new user_1.User({ name: 'Joe' });
        joe.save()
            .then(function () {
            assert(!joe.isNew);
            done();
        });
    });
    it('Model Instance - update method', function (done) {
        joe.update({ name: 'Alex' })
            .then(function () { return user_1.User.findOne({ name: 'Joe' }); })
            .then(function (user) {
            assert(user === null);
            done();
        });
    });
    it('Model Instance - set and save method', function (done) {
        joe.set({ name: 'Alex' });
        joe.save()
            .then(function () { return user_1.User.findOne({ name: 'Joe' }); })
            .then(function (user) {
            assert(user === null);
            done();
        });
    });
    it('Model Class  - update method', function (done) {
        user_1.User.update({ name: 'Joe' }, { name: 'Alex' })
            .then(function () { return user_1.User.findOne({ name: 'Joe' }); })
            .then(function (user) {
            assert(user === null);
            done();
        });
    });
    it('Model Class  - findOneAndUpdate method', function (done) {
        user_1.User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' })
            .then(function () { return user_1.User.findOne({ name: 'Joe' }); })
            .then(function (user) {
            assert(user === null);
            done();
        });
    });
    it('Model Class  - findByIdAndRemove method', function (done) {
        user_1.User.findByIdAndUpdate({ _id: joe._id }, { name: 'Alex' })
            .then(function () { return user_1.User.findOne({ name: 'Joe' }); })
            .then(function (user) {
            assert(user === null);
            done();
        });
    });
});
