'use strict';

var gulp = tars.packages.gulp;
var del = tars.packages.del;

var pathsToDel = [
        './dev/',
        './.tmpTemplater/',
        './.tmpPreproc/'
    ];

if (!tars.config.useBuildVersioning) {
    pathsToDel.push(tars.options.build.path);
}

/**
 * Clean dev directory and cache
 */
module.exports = function () {
    return gulp.task('service:clean', function (cb) {
        del(pathsToDel, cb);
    });
};
