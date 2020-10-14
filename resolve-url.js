// resolve-url.js
const slugify = require('slugify')
module.exports = (title) => `/${slugify(title).toLowerCase()}`