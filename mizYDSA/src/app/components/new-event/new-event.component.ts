import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css',
  providers: [provideNativeDateAdapter()]
})
export class NewEventComponent {
  eventForm = new FormGroup(
    {
      name: new FormControl(''),
      date: new FormControl(new Date()),
      summary: new FormControl('')
    }
  )

  onSubmit() {
    console.log(this.eventForm.value);
  }

}
