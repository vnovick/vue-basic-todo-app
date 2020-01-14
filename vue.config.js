const path = require('path')

module.exports =  {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].template = path.join(__dirname,'index.html')
                return args
            })
    }
}