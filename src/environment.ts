export const environment = {
  production: false,
  weatherApiKey: 'eb31135fb29fcaa37e833f22ba1d6102',
  auth: {
    domain: 'dev-vtfkjb5pwfpa287m.us.auth0.com',  // Your Auth0 domain
    clientId: 'uLS7lllT5jhOCKNFTzjy6fOacZIhKVda',              // Replace this with your actual Client ID
    authorizationParams: {
      redirect_uri: 'http://localhost:4200',
    }
  }
};
