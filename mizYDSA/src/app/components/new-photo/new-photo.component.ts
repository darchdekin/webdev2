import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrl: './new-photo.component.css',
  providers: [provideNativeDateAdapter()]
})
export class NewPhotoComponent {

  newPhotoForm = new FormGroup({
    link: new FormControl(),
    date: new FormControl(),
    event: new FormControl(),
    name: new FormControl(),
    tags: new FormControl(),
    credit: new FormControl(),
    caption: new FormControl(),
    isDrive: new FormControl()
  })

  onSubmit(){
    console.log("submit")
    if(!(this.newPhotoForm.value.name && this.newPhotoForm.value.link)) return;

    try {
      this.photoService.addPhoto(
        this.newPhotoForm.value.name,
        this.newPhotoForm.value.link,
        this.newPhotoForm.value.isDrive,
        this.newPhotoForm.value.event,
        this.newPhotoForm.value.date,
        this.newPhotoForm.value.credit?.split(',').map( (s: String) => s.trim()),
        this.newPhotoForm.value.tags?.split(',').map( (s: String) => s.trim()),
        this.newPhotoForm.value.caption
      ).subscribe({
        next: (response) => {
          console.log('Images added successfully:', response);
          // Optionally, you can reset the form after successful submission
          //this.massPhotosForm.reset();
        },
        error: (error) => {
          console.error('Error processing image:', error);
        }
      })
    } catch {}
  }

  constructor(private photoService: PhotoService) {}
}
