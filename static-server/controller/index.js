module.exports = async(ctx) => {
    const title = 'wj';

    await ctx.render('index', {
        title
    })
}