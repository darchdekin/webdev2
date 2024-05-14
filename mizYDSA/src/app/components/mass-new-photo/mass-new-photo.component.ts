import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { PhotoService } from '../../services/photo.service';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';
import {MatSnackBar} from '@angular/material/snack-bar';

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
      name: new FormControl(''),
      tags: new FormControl(''),
      credit: new FormControl('')
    }
  )

  constructor(private photoService: PhotoService, private _snackBar: MatSnackBar) {}

  onSubmit(){
    const linkList = this.massPhotosForm.value.links?.split('\n').map(s => s.trim())
    let event = this.massPhotosForm.value.event
    let date = this.massPhotosForm.value.date
    const name = this.massPhotosForm.value.name
    let tags = this.massPhotosForm.value.tags != "" ? this.massPhotosForm.value.tags?.split(',').map(s => s.trim()) : undefined
    let credit = this.massPhotosForm.value.credit != "" ? this.massPhotosForm.value.credit?.split(',').map(s => s.trim()) : undefined

    if(linkList == undefined || name == undefined) return

    console.log(linkList);
    this.photoService.addManyPhotos(name, linkList, event, date, tags, credit, true).subscribe({
      next: (response) => {
        console.log('Links processed successfully:', response);
        // Optionally, you can reset the form after successful submission
        this._snackBar.open(`Added ${response.number} images`, "X");
        this.massPhotosForm.reset();
      },
      error: (error) => {
        console.error('Error processing links:', error);
      }
    })
  }
}
