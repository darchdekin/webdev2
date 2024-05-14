import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../services/page-name.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css'
})
export class ViewEventComponent implements OnInit {
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private title: Title, private page: Page) {}

  ngOnInit(): void {
    this.loadEvent();
  }

  loadEvent(): void {

    const eventId = this.route.snapshot.paramMap.get('id'); // Get event ID from URL
    if (eventId) {
      this.eventsService.getEventById(eventId).subscribe({
        next: (event: Event) => {
          this.event = event;
          this.page.setName(event.title)
        },
        error: (error) => {
          console.error('Error loading event:', error);
        }
      });
    }
  }
}
