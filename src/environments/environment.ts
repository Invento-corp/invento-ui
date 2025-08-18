export const environment = {
  production: false,
  apiBase: 'https://8anix2hn11.execute-api.us-east-2.amazonaws.com/',
  cognito: {
    userPoolId: 'us-east-2_bjasyhYjo',
    clientId: 'YO7o65tn4k5338gg8pcenjssjhvd',
    domain: 'https://YOUR_DOMAIN.auth.YOUR_REGION.amazoncognito.com',
    redirectUri: 'http://localhost:4200/auth/callback'
  }
};
