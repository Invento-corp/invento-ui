import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <header class="toolbar">
    <a routerLink="/" class="brand">Cognito Login</a>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/items">View Items</a>
      <a routerLink="/profile">Profile</a>
      <button *ngIf="!loggedIn" (click)="login()">Login</button>
      <button *ngIf="loggedIn" (click)="logout()">Logout</button>
    </nav>
  </header>
  <main class="container"><router-outlet/></main>
  `,
  styles: [`.toolbar{display:flex;gap:16px;align-items:center;justify-content:space-between;padding:10px 16px;background:#111;color:#fff}.brand{color:#fff;text-decoration:none}.container{padding:24px} nav a{margin-right:12px}`]
})
export class AppComponent implements OnInit {
  loggedIn = false;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(){
    this.auth.loadUser().then(() => {
      this.loggedIn = !!this.auth.user();
      const path = sessionStorage.getItem('redirectPath');
      if (this.loggedIn && path) {
        sessionStorage.removeItem('redirectPath');
        this.router.navigateByUrl(path);
      }
    });
  }
  async login(){ await this.auth.login(); }
  async logout(){ await this.auth.logout(); this.loggedIn = false; this.router.navigateByUrl('/'); }
}
