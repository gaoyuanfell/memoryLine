/**
 * Created by Yuan on 2016/7/17.
 * 用户详情
 */
'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserDetailSchema = new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'User'},
    valid:{type:Number,default:0},
    sort:{type:Number},
    create_time: {type: Date, default: new Date()},
    update_time: {type: Date, default: new Date()},
    state:{
        type:Number,
        enum:[0,1],
        default:0
    }
});

UserDetailSchema.statics.errorSend = function (res, err) {
    res.statusCode = 500;
    res.send({ code: 500, msg: err });
};

module.exports = function (db) {
    db.model('UserDetail', UserDetailSchema, 'UserDetail');
};