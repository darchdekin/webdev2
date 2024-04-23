import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrl: './view-photo.component.css'
})
export class ViewPhotoComponent implements OnInit {
  photo: Photo | undefined;
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private photoService: PhotoService, private EventService: EventsService) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.paramMap.get('id')
    if(photoId){
      this.photoService.getPhotoById(photoId).subscribe({
        next: (value: Photo) => {this.photo = value},
        error: (error) => {console.error(error)}
      })
    }

    if(this.photo?.event){
      this.EventService.getEventById(this.photo.event).subscribe({
        next: (value: Event) => {this.event = value}
      })
    }
  }
}
