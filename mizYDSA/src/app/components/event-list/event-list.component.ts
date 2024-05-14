import { Component, Input } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent{
  @Input() events?: Event[] = []

  bgs: String[] = [
    "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551968788-b4c60b067dd5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  getStyle(event: Event, index: number) {
    let url: String
    if(event.cover_image){
      url = event.cover_image?.url
    }
    else {
      url = this.bgs[index % this.bgs.length]
    }
    return {
      'background-image': `url(${url})`
    }
  }

}
