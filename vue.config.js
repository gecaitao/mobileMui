// vue.config.js
module.exports = {
  publicPath: './',
  chainWebpack: config => {
      config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
};
