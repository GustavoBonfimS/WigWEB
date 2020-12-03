const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:3333',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/api':  ''  }
    }
];

module.exports = PROXY_CONFIG;