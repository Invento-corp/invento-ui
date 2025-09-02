import { Injectable, signal } from '@angular/core';
import { getCurrentUser, signInWithRedirect, signOut, fetchAuthSession } from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<null | { username?: string; userId?: string }>(null);

  async loadUser() {
    try {
      const u = await getCurrentUser();
      this.user.set({ username: u.username, userId: u.userId });
    } catch {
      this.user.set(null);
    }
    return this.user();
  }

  async login() {
    await signInWithRedirect();
  }

  async logout() {
    await signOut();
    this.user.set(null);
  }

  async getIdToken(): Promise<string | null> {
    const s = await fetchAuthSession();
    return s.tokens?.idToken?.toString() ?? null;
  }
}
