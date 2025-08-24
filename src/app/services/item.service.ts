import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://fe4muuiv31.execute-api.us-east-1.amazonaws.com/dev/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    console.log(' call 2:');
    return this.http.get<any>(this.apiUrl);
  }

  // Add more methods like postItem(item), deleteItem(id), etc., as needed
}
