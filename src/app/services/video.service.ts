import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideo } from '../interfaces/ivideo';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  API_URL = 'http://localhost/api-videos/';
  constructor(private http: HttpClient) {}

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this.API_URL);
  }
}
