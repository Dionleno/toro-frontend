export const environment = {
    production: false,
    auth: {
        domain: process.env.OAUTH0_DOMAIN,
        clientId: process.env.OAUTH0_CLIENT_ID,
        redirectUri: window.location.origin,
        audience: process.env.OAUTH0_AUDIENCE
      },
      dev: {
        serverUrl: process.env.SERVER_URL
      },
};