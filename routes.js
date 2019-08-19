// Defines different routes

const routes = require('next-routes')(); //return a function and () means execute it

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show');

module.exports = routes;