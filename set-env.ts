import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    production: true,
    auth: {
        domain: '${process.env['OAUTH0_DOMAIN']}',
        clientId: '${process.env['OAUTH0_CLIENT_ID']}',
        redirectUri: window.location.origin,
        audience: '${process.env['OAUTH0_AUDIENCE']}',
      },
      dev: {
        serverUrl: '${process.env['SERVER_URL']}',
      },
}`;

writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});