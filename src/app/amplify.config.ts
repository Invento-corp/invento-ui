import { Amplify } from 'aws-amplify';
import { environment } from '../environments/environment';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.cognito.userPoolId,
      userPoolClientId: environment.cognito.userPoolClientId,
      loginWith: {
        oauth: {
          domain: environment.cognito.hostedUIDomain.replace(/^https?:\/\//, ''),
          scopes: environment.cognito.loginScopes,
          redirectSignIn: [environment.cognito.redirectSignIn],
          redirectSignOut: [environment.cognito.redirectSignOut],
          responseType: 'code',
        }
      },
    }
  }
});
