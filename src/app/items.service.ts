import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export interface Item { id: string; name: string; qty: number; unit: string; }

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private base = environment.apiBase;
  constructor(private http: HttpClient) {}
  list() { return this.http.get<Item[]>(`${this.base}/items`); }
  create(p: Partial<Item>) { return this.http.post(`${this.base}/items`, p); }
  adjust(id: string, delta: number) { return this.http.put(`${this.base}/items/${id}/stock`, { delta }); }
  remove(id: string) { return this.http.delete(`${this.base}/items/${id}`); }
}
