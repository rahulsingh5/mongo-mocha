import * as mongoose from 'mongoose';

(mongoose as any).Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost:27017/users_test');

    mongoose.connection
        .once('open', () => {
            console.log('Good to go!');
            done();
        })
        .on('error', (error) => console.error(`Error ${error}`));
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => done());
});