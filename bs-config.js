var proxy = require('http-proxy-middleware'),
  urlRewrite = require('connect-history-api-fallback');

module.exports = {
  files: ["./src/**/*.{html,htm,css,js}"],
  server: {
    baseDir: ["./src", "./node_modules"],
    index: "/index.html",
    middleware: {
      1: proxy('/api', {
        target: 'http://api.rottentomatoes.com',
        changeOrigin: true
      }),
      2: urlRewrite({index: '/index.html', verbose: true})
    }
  },
  port: 8000
};
