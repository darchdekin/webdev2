import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { PhotoService } from '../../services/photo.service';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-mass-new-photo',
  templateUrl: './mass-new-photo.component.html',
  styleUrl: './mass-new-photo.component.css',
  providers: [provideNativeDateAdapter()]
})
export class MassNewPhotoComponent {
  massPhotosForm = new FormGroup(
    {
      links: new FormControl(''),
      date: new FormControl(new Date()),
      event: new FormControl(''),
      name: new FormControl('')
    }
  )

  constructor(private photoService: PhotoService) {}

  onSubmit(){
    const linkList = this.massPhotosForm.value.links?.split(',').map(s => s.trim())
    let event = this.massPhotosForm.value.event
    let date = this.massPhotosForm.value.date
    const name = this.massPhotosForm.value.name

    if(linkList == undefined || name == undefined) return

    console.log(linkList);
    this.photoService.massPhotoLinks(linkList, event, date, name).subscribe({
      next: (response) => {
        console.log('Links processed successfully:', response);
        // Optionally, you can reset the form after successful submission
        //this.massPhotosForm.reset();
      },
      error: (error) => {
        console.error('Error processing links:', error);
      }
    })
  }
}
