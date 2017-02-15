/**
 * Created by moka on 16-7-18.
 */
"use strict";

module.exports = {
    baseUrl:'http://127.0.0.1',
    fileUrl:'http://127.0.0.1',
    url:'mongodb://127.0.0.1/memory',
    port: 80,
    bodyParser: {
        json: { limit: '150kb' },
        urlencoded: { extended: true }
    },
    mongoStore: {
        url: 'mongodb://127.0.0.1/session',
        collection: 'Sessions'
    },
    redisStore: {
        host: "127.0.0.1",
        port: 6379,
        db: 0,
        ttl: 20,
        prefix: 'memory'
    },
    //请求白名单
    whiteUrlList: [

    ]
};
