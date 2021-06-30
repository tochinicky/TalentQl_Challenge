const BaseRouter = require('./baseRouter');
const CardsController = require('../controllers/CardController');
const validateClientCredentials = require('../middlewares/authenticate');
const { getPathName, routePaths, response } = require('../utils');

const cardsController = new CardsController();

const POST_METHOD = 'POST';

const validateRoutePath = (pathName, specificRoute) => {
    const splittedPath = pathName.split('/');
    
    return splittedPath[2] === specificRoute.split('/')[2] &&
        (splittedPath[3] === undefined || splittedPath[3] === '')
            ? true : false;
}

class CardsRouter extends BaseRouter {
    routeRequest(req, res) {
        const pathName = getPathName(req.url);

        // allow only "/cards/validate" and "/cards/validate/" to go through
        if (validateRoutePath(pathName, routePaths.validateCard) && req.method === POST_METHOD) {
            try {
                // check auth token
                validateClientCredentials(req, res);
            } catch (error) {
                return response(res, error.statusCode, error.data);
            }

            return cardsController.validateCard(req, res);
        }

        // inheritance => method exists in the parent class (BaseRouter)
        return this.unknownRoute(req, res);
    }
}

module.exports = CardsRouter;