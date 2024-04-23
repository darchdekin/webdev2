import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseApiUrl = 'http://localhost:3000/photos'; // Replace with your server API URL

  constructor(private http: HttpClient) {}

  massPhotoLinks(links: string[], event: string | undefined | null, date: Date | undefined | null, name: string): Observable<any> {
    const apiUrl = `${this.baseApiUrl}/mass-create`; // Assuming this is your server's endpoint
    console.log("Mass photo upload")
    return this.http.post<any>(apiUrl, {
      event_id: event,
      date: date,
      name: name,
      links: links
    });
  }

  getPhotoById(id: string): Observable<Photo>{
    return this.http.get<Photo>(`${this.baseApiUrl}/${id}`)
  }
}