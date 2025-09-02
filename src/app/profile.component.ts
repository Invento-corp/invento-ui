import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule],
  template: `
    <h2>Your Profile</h2>
    <ng-container *ngIf="auth.user(); else loggedOut">
      <pre>{{ auth.user() | json }}</pre>
    </ng-container>
    <ng-template #loggedOut>
      <p>Please log in to see your profile.</p>
    </ng-template>
  `
})
export class ProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(){ this.auth.loadUser(); }
}
