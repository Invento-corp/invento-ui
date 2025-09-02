import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';
import { ItemsComponent } from './items.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
