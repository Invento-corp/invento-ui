import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsService, Item } from '../../items.service';
import { AuthService } from '../../auth.service';

@Component({
  standalone: true,
  selector: 'app-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsPageComponent implements OnInit {
  private svc = inject(ItemsService);
  auth = inject(AuthService);

  items: Item[] = [];
  form = { id: '', name: '', qty: 0, unit: 'pcs' };
  busy = false;
  error = '';

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.busy = true;
    this.error = '';
    this.svc.list().subscribe({
      next: (res: any) => { this.items = res; this.busy = false; },
      error: (e) => { this.error = e?.error?.error || e.message; this.busy = false; }
    });
  }

  create() {
    if (!this.form.id || !this.form.name) return;
    this.busy = true;
    this.svc.create(this.form).subscribe({
      next: _ => { this.form = { id: '', name: '', qty: 0, unit: 'pcs' }; this.refresh(); },
      error: (e) => { this.error = e?.error?.error || e.message; this.busy = false; }
    });
  }

  adjust(it: Item, d: number) {
    this.busy = true;
    this.svc.adjust(it.id, d).subscribe({
      next: _ => this.refresh(),
      error: (e) => { this.error = e?.error?.error || e.message; this.busy = false; }
    });
  }

  remove(it: Item) {
    if (!confirm(`Delete ${it.name}?`)) return;
    this.busy = true;
    this.svc.remove(it.id).subscribe({
      next: _ => this.refresh(),
      error: (e) => { this.error = e?.error?.error || e.message; this.busy = false; }
    });
  }
}
