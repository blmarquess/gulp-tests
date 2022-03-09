const shell = require('shelljs');
const gulp = require('gulp');
const watch = require('gulp-watch');

const rc = 'MYSQL_USER=root MYSQL_PASSWORD=123456 HOSTNAME=localhost PORT=3306 npm test >> log.txt';

function runTestes() {
  console.log('Rodando testes...');
  return shell.exec(rc);
}

function monitor() {
  return watch('./*.sql', runTestes);
}

exports.watch = monitor;
exports.default = gulp.series(monitor);
