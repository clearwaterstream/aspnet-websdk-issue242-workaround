var gulp = require("gulp");
var replace = require('gulp-replace');

var pkgStagingDir = './obj/Release/net47/win10-x64/PubTmp/Out/';

gulp.task('workaround_242', function () {
    var web_config = pkgStagingDir + 'web.config';

    /* this is to address https://github.com/aspnet/websdk/issues/242 */

    gulp.src([web_config])
        .pipe(replace(' arguments="-argFile IISExeLauncherArgs.txt"', ''))
        .pipe(gulp.dest(pkgStagingDir, { overwrite: true }));
});

gulp.task('default', ['workaround_242']);