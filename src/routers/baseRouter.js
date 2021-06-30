const { response } = require('../utils');

class BaseRouter {
    unknownRoute(req, res) {
        const data = {
            bool: false,
            code: 404,
            message: 'Route unknown',
        };

        return response(res, 404, data);
    }
}

module.exports = BaseRouter;