import * as mongoose from 'mongoose';
import * as assert from 'assert';

import { User } from '../src/user';


describe('Creating Records', () => {

    it('save record to database', (done) => {
        const joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });
    });

});