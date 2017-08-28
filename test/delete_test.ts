import * as mongoose from 'mongoose';
import * as assert from 'assert';
import { User } from '../src/user';

describe('Remove data from database', () => {
    let joe: any;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    });

    it('Model Instance - remove method', (done) => {
        joe.remove({ name: 'Joe'})
            .then(() => User.findOne({name: 'Joe'}))
            .then((user: any) => {
                assert(user === null);
                done();
            });
    });

    it('Model Class - remove method', (done) => {
        User.remove({name: 'Joe'})
            .then((): any => User.find({name: 'Joe'}))
            .then((users: any) => {
                assert(users.length === 0);
                done();
            });
    });

    it('Model Class - findOneAndRemove method', (done) => {
        User.findOneAndRemove({name: 'Joe'})
            .then((): any => User.find({name: 'Joe'}))
            .then((users: any) => {
                assert(users.length === 0);
                done();
            });
    });

    it('Model Class - findByIdAndRemove method', (done) => {
        User.findByIdAndRemove({_id: joe._id})
            .then((): any => User.find({name: 'Joe'}))
            .then((user: any) => {
                assert(user.length === 0);
                done();
            });
    });
});