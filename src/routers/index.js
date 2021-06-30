const CardsRouter = require('./cards');
const { routePaths, getPathName } = require('../utils')

const cardsRouter = new CardsRouter();

const matchRoute = (pathName, routePath) => {
    const splittedPath = pathName.split('/');

    if (splittedPath[1] === routePath) return true;
    return false;
}

const routes = (req, res) => {
    const pathName = getPathName(req.url);

    // check if route is "/cards"
    if (matchRoute(pathName, routePaths.cards)) {
        return cardsRouter.routeRequest(req, res);
    }else{
        return cardsRouter.unknownRoute(req,res);
    }
}

module.exports = routes;