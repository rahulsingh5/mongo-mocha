"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var user_1 = require("../src/user");
describe('Creating Records', function () {
    it('save record to database', function (done) {
        var joe = new user_1.User({ name: 'Joe' });
        joe.save()
            .then(function () {
            assert(!joe.isNew);
            done();
        });
    });
});
