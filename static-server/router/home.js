const router = require('koa-router')();
const index = require('../controller/index');
const upload = require('../controller/upload');

module.exports = router.get('index', index)
    .get('upload', upload)