const { sources } = require("next/dist/compiled/webpack/webpack")

module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/index.html'
            },
            {
                source: '/:path*',
                destination: '/:path*',
            },
        ];
    },
};