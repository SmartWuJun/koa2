const Koa = require('koa')

const app = new Koa();

app.use(async function(ctx) {
    if (ctx.url == '/index') {
        ctx.cookies.set(
            'cid', 'wujun', {
                domain: 'localhost',
                path: '/index',
                maxAge: 10 * 60 * 1000,
                expires: new Date('2017-09-26'),
                httpOnly: false,
                overwrite: true
            }
        );
        ctx.body = 'cookies';
    } else {

        ctx.body = 'no cookie'
    }
})

app.listen(3000, () => {
    console.log("localhost:3000");
})