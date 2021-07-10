const path=require('path')
let cdn = {
    css: [
        // element-ui css
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css',// 样式表
        // vant css
        "https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css",
    ],
    js: [
        // vue must at first!
        'https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js', // vuejs
        // vue-router
        'https://unpkg.com/vue-router/dist/vue-router.js',
        // axios
        'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js',
        // element-ui js
        'https://unpkg.com/element-ui/lib/index.js', // elementUI
        // vant
        'https://cdn.jsdelivr.net/npm/vant@2.12/lib/vant.min.js',
        // Vuex
        'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js'

    ]
}
let externals={
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'moment': 'moment',
    'axios': 'axios',
    'vuex': 'Vuex',
    'vant': 'vant',
    'element-ui': 'ELEMENT',
}

module.exports={
    publicPath:'',
    configureWebpack:{
        externals:externals
    },
    chainWebpack (config) {
        config.plugin('html').tap(args => {
            args[0].cdn = cdn
            return args
        })
        const types=['vue']
        types.forEach(type=>{
            config.module.rule('less').oneOf(type).use('style-resource')
              .loader('style-resources-loader')
              .options({
                  patterns:[
                      //公用的less变量
                      path.resolve(__dirname,'./src/static/variable.less'),
                      //公用的less混入
                      path.resolve(__dirname,'./src/static/mixin.less'),
                  ]
              })
        })
    }
}
