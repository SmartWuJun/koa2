const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const views = require('koa-views');
const bodyParser = require('koa-bodyparser')

const Router = require('koa-router');

const { uploadFile } = require('./util/upload')
const router = require('./router/index');


const app = new Koa()
    // const api = new Router();
    // 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(bodyParser());
app.use(static(
    path.join(__dirname, staticPath)
))
app.use(views(path.join(__dirname, './view'), { extension: 'ejs' }))

// app.use(async(ctx) => {
//     const title = 'hello koa'
//     await ctx.render('index', {
//         title
//     })
// })



// api.post('/api/upload1', async(ctx) => {
//     // 上传文件请求处理
//     let result = { success: false }
//     let serverFilePath = path.join(__dirname, 'upload-files')

//     // 上传文件事件
//     result = await uploadFile(ctx, {
//             fileType: 'album', // common or album
//             path: serverFilePath
//         })
//         // ctx.response.type = 'application/json';
//     ctx.body = JSON.stringify(result);
// });

app.use(router.routes(), router.allowedMethods)

// app.use(async(ctx, next) => {
//     console.log(ctx.url);
//     await ctx.render(ctx.url.slice(1), {

//     })
//     next();
// })

// app.use(async(ctx, next) => {
//     ctx.body = 'hello world'
//         // next();
// })
app.listen(3000)
console.log('[demo] static-use-middleware is starting at port 3000')