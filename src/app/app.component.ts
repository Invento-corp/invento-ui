import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <header class="header">
      <h1>Inventory</h1>
      <div class="spacer"></div>
      <ng-container *ngIf="auth.isLoggedIn(); else loggedOut">
        <span class="user">{{ auth.userEmail() || 'Signed in' }}</span>
        <button (click)="auth.logout()">Logout</button>
      </ng-container>
      <ng-template #loggedOut>
        <button (click)="auth.login()">Login</button>
      </ng-template>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .header{display:flex;align-items:center;gap:1rem;padding:1rem;border-bottom:1px solid #333}
    .spacer{flex:1}
    button{padding:.5rem 1rem;border:1px solid #555;background:#111;color:#eee;border-radius:.5rem;cursor:pointer}
    .user{opacity:.8;margin-right:.5rem}
  `]
})
export class AppComponent {
  auth = inject(AuthService);
}
