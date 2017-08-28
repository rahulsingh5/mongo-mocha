import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String
});

export const User = mongoose.model('user', UserSchema);