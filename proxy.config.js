const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://api-content.ingresso.com/',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: { '^/api' : 'https://api-content.ingresso.com' }
  }
];

module.exports = PROXY_CONFIG;