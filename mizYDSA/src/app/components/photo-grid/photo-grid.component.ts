import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrl: './photo-grid.component.css'
})
export class PhotoGridComponent {
  @Input() photos: Photo[] | undefined = []
}
