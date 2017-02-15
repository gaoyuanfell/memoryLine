/**
 * Created by Yuan on 2016/7/17.
 */
'use strict';
let mongoose = require("mongoose");
let UserDetail = mongoose.model('UserDetail');
let Page = require('../../base/page');

exports.findList = function (req, res) {
    Page(req.body.pageIndex, req.body.pageSize, UserDetail, {}, (err, doc) => {
        if (err)
            UserDetail.errorSend(res,err);
        else
            res.send({ code: 200, doc: doc });
    })
};

exports.findById = function (req, res) {
    UserDetail.findOne(req.body).then(
        (doc) => {
            res.send({ code: 200, doc: doc });
        },
        (err) => {
            UserDetail.errorSend(res,err);
        }
    )
};