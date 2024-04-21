import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-featured-collection',
  templateUrl: './featured-collection.component.html',
  styleUrl: './featured-collection.component.css'
})
export class FeaturedCollectionComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventsService.getAllEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
      },
      (error) => {
        console.error('Error loading events:', error);
      }
    );
  }

  getRowColor(index: number): string {
    return index % 2 === 0 ? '#f0f0f0' : '#ffffff'; // Alternate row colors (e.g., gray and white)
    // You can define more complex logic here to generate different colors based on the index
  }
}
