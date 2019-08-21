// Defines different routes

const routes = require('next-routes')(); //return a function and () means execute it

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;