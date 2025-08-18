import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessKey = 'access_token';
  private idKey = 'id_token';

  login() {
    const { clientId, redirectUri } = environment.cognito;
    const url = `${environment.cognito.domain}/oauth2/authorize` +
      `?client_id=${encodeURIComponent(clientId)}` +
      `&response_type=token` +
      `&scope=openid+email+profile` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = url;
  }

  handleCallback() {
    if (location.hash.includes('access_token=')) {
      const params = new URLSearchParams(location.hash.substring(1));
      const access = params.get('access_token');
      const idt = params.get('id_token'); // may be null if not requested
      if (access) localStorage.setItem(this.accessKey, access);
      if (idt) localStorage.setItem(this.idKey, idt);
      history.replaceState({}, '', location.pathname);
    }
  }

  token() { return localStorage.getItem(this.accessKey); }
  idToken() { return localStorage.getItem(this.idKey); }
  isLoggedIn() { return !!this.token(); }
  logout() { localStorage.removeItem(this.accessKey); localStorage.removeItem(this.idKey); location.href = '/'; }

  userEmail(): string | null {
    const idt = this.idToken();
    if (!idt) return null;
    try {
      const payload = JSON.parse(atob(idt.split('.')[1]));
      return payload.email || payload['cognito:username'] || null;
    } catch { return null; }
  }
}
