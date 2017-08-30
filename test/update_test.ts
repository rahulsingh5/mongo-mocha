import * as assert from 'assert';
import { User } from '../src/user';

describe('Update data in the database', () => {
    let joe: any;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    });

    it('Model Instance - update method', (done) => {
        joe.update({ name: 'Alex' })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user: any) => {
                assert(user === null);
                done();
            });
    });

    it('Model Instance - set and save method', (done) => {
        joe.set({ name: 'Alex' });

        joe.save()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user: any) => {
                assert(user === null);
                done();
            });
    });

    it('Model Class  - update method', (done) => {
        User.update({ name: 'Joe' }, { name: 'Alex' })
            .then((): any => User.findOne({ name: 'Joe' }))
            .then((user: any) => {
                assert(user === null);
                done();
            });
    });

    it('Model Class  - findOneAndUpdate method', (done) => {
        User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' })
            .then((): any => User.findOne({ name: 'Joe' }))
            .then((user: any) => {
                assert(user === null);
                done();
            });
    });

    it('Model Class  - findByIdAndRemove method', (done) => {
        User.findByIdAndUpdate({ _id: joe._id }, { name: 'Alex' })
            .then((): any => User.findOne({ name: 'Joe' }))
            .then((user: any) => {
                assert(user === null);
                done();
            });
    });
});