import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo, PhotoGallery } from '../models/photo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseApiUrl = environment.apiUrl + "/photos"

  constructor(private http: HttpClient) {}

  addPhoto(name: string, link: string, isDrive: boolean, event?: string, date?: Date, credit?: string[], tags?: string[], caption?: string, convert?: boolean) {
    return this.http.post<any>(this.baseApiUrl, {
      name: name,
      link: link,
      isDrive: isDrive,
      event_id: event,
      date: date,
      credit: credit,
      tags: tags,
      caption: caption,
      convert: convert
    })
  }

  addManyPhotos(name: string, links: string[], event: string | undefined | null, date: Date | undefined | null, tags: string[] | undefined, credit: string[] | undefined, convert?: boolean): Observable<any> {
    const apiUrl = `${this.baseApiUrl}/mass-create`;
    return this.http.post<any>(apiUrl, {
      event_id: event,
      date: date,
      name: name,
      links: links,
      tags: tags,
      credit: credit,
      convert: convert
    });
  }

  getPhotoById(id: string): Observable<Photo>{
    return this.http.get<Photo>(`${this.baseApiUrl}/${id}`)
  }

 

  getPhotosByEvent(id: string): Observable<PhotoGallery> {
    return this.http.get<PhotoGallery>(`${this.baseApiUrl}/event/${id}`)
  }

}
