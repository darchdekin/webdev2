import { Component, OnInit } from '@angular/core';
import { Title  } from '@angular/platform-browser';

import { EventsService } from '../../services/events.service';
import { Page } from '../../services/page-name.service'
import { Event } from '../../models/event';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  events?: Event[] = []

  constructor(private eventsService: EventsService, private page: Page) {}

  ngOnInit(): void {
    this.loadEvents();
    this.page.name = "Recent Events"
  }

  loadEvents(): void {
    this.eventsService.getAllEvents().subscribe({
      next: (value: Event[]) => {
        this.events = value;
      },
      error : (error) => {
        console.error(error)
      }
    })
  }
}
