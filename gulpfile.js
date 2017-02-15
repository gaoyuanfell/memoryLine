/**
 * Created by Yuan on 2016/7/16.
 */
let gulp = require('gulp');
let del = require('del'); //文件删除
let runSequence = require('run-sequence'); //异步任务
let gulpWatch = require('gulp-watch'); //监听插件
let uglify = require('gulp-uglify');
let nodemon = require('gulp-nodemon');
let gulpConcat = require('gulp-concat');

gulp.task('default', function () {
    nodemon({
        script: 'server.js',
        ignore:[
            'public/**', 
            'test/**',
            'webapp',
            'www',
            'node_modules',
            'uploads',
            'package.json',
            '.gitignore',
            'README.md',
            'mongodb'
        ]
    }).on('restart', function () {
        
    });
});

