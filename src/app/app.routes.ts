import { Routes } from '@angular/router';
import { ItemsPageComponent } from './pages/items/items.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';

export const routes: Routes = [
  { path: '', component: ItemsPageComponent },
  { path: 'auth/callback', component: AuthCallbackComponent },
  { path: '**', redirectTo: '' }
];
