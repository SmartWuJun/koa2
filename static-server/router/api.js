const router = require('koa-router')();
const uploadFile = require('./../controller/upload-file');

module.exports = router.post('/upload', uploadFile)