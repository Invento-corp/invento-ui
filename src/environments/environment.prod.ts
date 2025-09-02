export const environment = {
  production: true,
  cognito: {
    userPoolId: 'YOUR_PROD_USER_POOL_ID',
    userPoolClientId: 'YOUR_PROD_APP_CLIENT_ID',
    region: 'us-east-1',
    hostedUIDomain: 'https://your-prod-domain.auth.us-east-1.amazoncognito.com',
    loginScopes: ['email', 'openid', 'profile'],
    redirectSignIn: 'https://yourapp.example.com/',
    redirectSignOut: 'https://yourapp.example.com/',
  },
  apiBaseUrl: 'https://your-prod-api-id.execute-api.us-east-1.amazonaws.com/prod'
};
