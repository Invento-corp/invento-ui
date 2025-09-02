import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from './items.service';

@Component({
  standalone: true,
  selector: 'app-items',
  imports: [CommonModule],
  template: `
    <h1>Items</h1>
    <p *ngIf="loading">Loading…</p>
    <pre *ngIf="!loading">{{ items | json }}</pre>
  `
})
export class ItemsComponent implements OnInit {
  items: any;
  loading = true;
  constructor(private api: ItemsService) {}
  ngOnInit() {
    this.api.list().subscribe({
      next: data => { this.items = data; this.loading = false; },
      error: err => { this.items = { error: true, message: err?.message || err }; this.loading = false; }
    });
  }
}
