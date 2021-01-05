/* eslint-disable */
const path = require('path') // 引入一个叫做 path 的 node.js 的模块

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
            ? '/money-website/'
            : '/',
    lintOnSave: false,
    chainWebpack: config => { // 添加一个 chainWebpack 函数，它接受 config
        const dir = path.resolve(__dirname, 'src/assets/icons') // 确定 icon 所在的目录
        // __dirname 指当前目录，vue.config.js 就在 src 目录里；然后后面写在当前文件中的什么目录里
        // 我们把 icon 所在目录叫做 dir

        config.module // config 是 Vue 把 Webpack 的 api 封装然后暴露给我们的一个对象
            .rule('svg-sprite') // 添加一个规则
            .test(/\.svg$/) // 文件如果能匹配上这个正则(以 .svg 结尾)，就要使用上面的规则
            .include.add(dir).end() // 上面的规则和正则只用于 dir 目录
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end() // extract: false：不要解析出文件来
            .use('svgo-loader').loader('svgo-loader')
            .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
    }
}
