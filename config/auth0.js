module.exports = {
  //THE ISSUE IS HERE, NO PROCESS.ENV.AUTH0. Set one up with Ash.
  jwksUri: process.env.AUTH0_JWKS_URI,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  connection: process.env.AUTH0_CONNECTION,
  token: process.env.AUTH0_TOKEN,
};
