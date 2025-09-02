export const environment = {
  production: false,
  cognito: {
    userPoolId: 'us-east-1_YToAgfnlY',
    userPoolClientId: '4bk2h6d3vtcmas4s33416hd41a',
    region: 'us-east-1',
    hostedUIDomain: 'https://us-east-1ytoagfnly.auth.us-east-1.amazoncognito.com',
    loginScopes: ['email', 'openid', 'profile'],
    redirectSignIn: 'http://localhost:4200/',
    redirectSignOut: 'http://localhost:4200/',
  },
  apiBaseUrl: 'https://fe4muuiv31.execute-api.us-east-1.amazonaws.com/dev'
};
