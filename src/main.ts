import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import 'zone.js'; // 👈 Required for Angular

bootstrapApplication(App, {
  providers: [provideHttpClient(withFetch())]
}).catch(err => console.error(err));
