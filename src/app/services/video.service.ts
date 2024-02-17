import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideo } from '../interfaces/ivideo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  API_URL_VIDEOS = 'http://localhost/api-videos/';
  constructor(private http: HttpClient) {}

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this.API_URL_VIDEOS);
  }
  getOneVideo(id: number): Observable<IVideo> {
    return this.http.get<IVideo>(`${this.API_URL_VIDEOS}?id=${id}`);
  }
  addVideo(video: IVideo): Observable<void> {
    return this.http.post<void>(this.API_URL_VIDEOS, video, httpOptions);
  }
  updateVideo(video: IVideo): Observable<void> {
    return this.http.put<void>(
      `${this.API_URL_VIDEOS}?id=${video.id}`,
      video,
      httpOptions
    );
  }
  deleteVideo(id: number): Observable<IVideo[]> {
    return this.http.delete<IVideo[]>(`${this.API_URL_VIDEOS}?id=${id}`);
  }
}
