"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: String
});
exports.User = mongoose.model('user', UserSchema);
