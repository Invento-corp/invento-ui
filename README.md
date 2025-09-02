# Angular 20 + AWS Cognito (Hosted UI) Login Starter

## Quickstart
1. Install deps
```bash
npm i
```
2. Edit `src/environments/environment.ts` with your:
- USER_POOL_ID
- APP_CLIENT_ID (no client secret)
- HOSTED_UI_DOMAIN (full https URL)
- API_BASE_URL (your API Gateway stage base)
3. Run
```bash
npm start
# open http://localhost:4200
```
4. Click **Login** → sign in on Cognito Hosted UI → you return to the app.
5. Try **Call /hello** → the **Authorization: Bearer <ID_TOKEN>** header is attached automatically.

## API Gateway JWT Authorizer
- Issuer: `https://cognito-idp.<region>.amazonaws.com/<USER_POOL_ID>`
- Audience: `<APP_CLIENT_ID>`
- Token source: `$request.header.Authorization`
Attach the authorizer to protected routes.
