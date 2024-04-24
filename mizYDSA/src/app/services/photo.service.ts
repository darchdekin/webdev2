import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseApiUrl = 'http://localhost:3000/photos'; // Replace with your server API URL

  constructor(private http: HttpClient) {}

  addPhoto(name: string, link: string, isDrive: boolean, event?: string, date?: Date, credit?: string[], tags?: string[], caption?: string) {
    return this.http.post<any>(this.baseApiUrl, {
      name: name,
      link: link,
      isDrive: isDrive,
      event_id: event,
      date: date,
      credit: credit,
      tags: tags,
      caption: caption
    })
  }

  addManyPhotos(name: string, links: string[], event: string | undefined | null, date: Date | undefined | null, tags: string[] | undefined, credit: string[] | undefined): Observable<any> {
    const apiUrl = `${this.baseApiUrl}/mass-create`;
    return this.http.post<any>(apiUrl, {
      event_id: event,
      date: date,
      name: name,
      links: links,
      tags: tags,
      credit: credit
    });
  }

  getPhotoById(id: string): Observable<Photo>{
    return this.http.get<Photo>(`${this.baseApiUrl}/${id}`)
  }

  getPhotosByEvent(id: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseApiUrl}/event/${id}`)
  }

}
