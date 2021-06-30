const env = {
  clientId: process.env.CLIENT_ID || 'myAppClientId',
  clientSecret: process.env.CLIENT_SECRET || 'myAppClientSecret',
  port: process.env.PORT || 4500,
}

module.exports = env;
