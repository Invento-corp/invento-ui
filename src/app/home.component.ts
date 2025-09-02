import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <h1>Welcome</h1>
    <p>Click to call a protected API route.</p>
    <button (click)="callApi()">Call /hello</button>
    <pre *ngIf="response">{{ response | json }}</pre>
  `
})
export class HomeComponent {
  response: any;
  constructor(private http: HttpClient) {}
  callApi(){
    this.http.get(environment.apiBaseUrl + '/hello').subscribe(r => this.response = r);
  }
}
