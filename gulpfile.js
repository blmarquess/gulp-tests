const shell = require('shelljs');
const gulp = require('gulp');
const watch = require('gulp-watch');

const user = 'root';
const psw = '123456';
const host = 'localhost';
const port = '3306';

const comander = `MYSQL_USER=${user} MYSQL_PASSWORD=${psw} HOSTNAME=${host} PORT=${port} npm test`;

function runTestes() {
  return shell.exec(comander);
}

function fileScan(cb) {
  watch('./**/*.sql', runTestes);
  cb();
}

exports.watch = fileScan;
exports.default = gulp.series(fileScan);
