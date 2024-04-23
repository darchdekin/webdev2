import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageEvent } from '@angular/material/paginator';

import { Photo } from '../../models/photo';
import { Event } from '../../models/event';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-view-photo-gallery',
  templateUrl: './view-photo-gallery.component.html',
  styleUrl: './view-photo-gallery.component.css'
})
export class ViewPhotoGalleryComponent implements OnInit{
  photos: Photo[] | undefined;
  childPhotos: Photo[] = []
  event: Event | undefined;

  // Paginator
  totalImages: number = 100
  totalPages: number = 10
  pageSize: number = 10
  pageIndex: number = 0

  constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id')

    if(eventId){
      this.photoService.getPhotosByEvent(eventId).subscribe({
        next: (value: Photo[]) => {
          this.photos = value
          this.totalImages = this.photos.length
          this.calculatePages(10, 0)
        },
        error: (error) => {console.error(error)}
      })
    }
  }

  calculatePages(pageSize: number, pageIndex: number) {
    this.pageSize = pageSize
    this.totalPages = Math.ceil(this.totalImages / this.pageSize)
    this.pageIndex = pageIndex
    if(this.photos) this.childPhotos = this.photos.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize)
  }

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.calculatePages(e.pageSize, e.pageIndex)
  }

}
