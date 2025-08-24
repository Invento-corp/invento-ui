import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  imports: [CommonModule],
  standalone: true, 
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss'
})
export class Greeting implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    console.log(' call 1:');
    console.log('Running on:', typeof window !== 'undefined' ? 'browser' : 'server');
    this.itemService.getItems().subscribe({
      next: (data) => {
        console.log('Received items:', data);
        this.items = data;
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }
}