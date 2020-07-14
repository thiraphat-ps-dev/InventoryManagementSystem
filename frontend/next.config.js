// next.config.js
const withSass = require('@zeit/next-sass');

module.exports = withSass();

const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})