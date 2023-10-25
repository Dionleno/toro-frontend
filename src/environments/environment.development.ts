import auth from '../../auth_config.json';

export const environment = {
    production: false,
    auth: {
        domain: auth.domain,
        clientId: auth.clientId,
        redirectUri: window.location.origin,
        audience: auth.audience
      },
      dev: {
        serverUrl: auth.serverUrl
      },
};