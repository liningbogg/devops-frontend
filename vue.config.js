module.exports = {
    publicPath: '/',//publicPath取代了baseUrl
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。
    devServer: {
	open: process.platform === 'darwin',
	host: '0.0.0.0',
	port: 8080,
	// 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
	//proxy: null, // string | Object
	proxy: {
	    '^/web': {
	        target: 'http://10.0.0.25:8000',
	        changeOrigin: true,   // 允许跨域
                pathRewriter: {
                    '^/web' : ''
                },
            },
	    '^/resourcemanagement': {
	        target: 'http://10.0.0.25:8000',
	        changeOrigin: true,   // 允许跨域
                pathRewriter: {
                    '^/resourcemanagement' : ''
                },
            }
        },
	before: app => {}
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }	
}
