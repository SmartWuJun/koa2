const path = require('path');
const { uploadFile } = require('../util/upload');

module.exports = async(ctx) => {
    console.log(11);
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join(__dirname, 'upload-files')

    // 上传文件事件
    result = await uploadFile(ctx, {
            fileType: 'album', // common or album
            path: serverFilePath
        })
        // ctx.response.type = 'application/json';
    ctx.body = JSON.stringify(result);
}