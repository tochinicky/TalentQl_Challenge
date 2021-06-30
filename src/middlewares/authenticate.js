const env = require('../config');

const invalidCredentials = (statusCode, message, bool) => {
    throw {
        statusCode,
        data: {
            message,
            bool,
            code: statusCode,
        }
    };
}

const isValidCredentials = (credential, clientId, clientSecret) => {
    if (credential[0] !== clientId || credential[1] !== clientSecret) return false;
    return true;
}

const validateClientCredentials = (req, res) => {
    
    const accessToken = req.headers.authorization;

    if (!accessToken) {
        return invalidCredentials(401, 'Authorization token is required', false);
    }

    const token = accessToken.split(' ')[1];
    if (!token) {
        return invalidCredentials(401, 'Invalid authorization token', false);
    }

    // convert base64 token to string
    const getCredentials = Buffer.from(token, 'base64').toString('utf-8');
    const credentials = getCredentials.split(':');

    if (credentials.length !== 2) {
        return invalidCredentials(401, 'Invalid authorization token', false);
    }

    const validateCredentials = isValidCredentials(credentials, env.clientId, env.clientSecret);

    if (!validateCredentials) {
        return invalidCredentials(401, 'Invalid authorization credentials', false);
    }
}

module.exports = validateClientCredentials;