import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  await auth.loadUser();
  if (!auth.user()) {
    const url = state?.url || '/';
    sessionStorage.setItem('redirectPath', url);
    await auth.login();  // Hosted UI redirect
    return false;
  }
  return true;
};
