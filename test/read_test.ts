import * as mongoose from 'mongoose';
import * as assert from 'assert';

import { User } from '../src/user';

describe('Reading data from database', () => {
    let joe: any;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    });

    it('find all the users from database named Joe', (done) => {
        User.find({ name: 'Joe' })
            .then((users: any) => {
                assert(users.length === 1);
                assert(users[0].name === 'Joe');
                done();
            });
    });

    it('find a particular user from database', (done) => {
        User.findOne({ name: 'Joe' })
            .then((user: any) => {
                assert(user.name === 'Joe');
                done();
            });
    });
});