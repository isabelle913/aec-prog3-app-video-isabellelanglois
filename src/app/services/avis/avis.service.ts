import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAvis } from 'src/app/interfaces/iavis';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  // http://localhost/api-videos/avis/?video=9
  API_URL_AVIS = 'http://localhost/api-videos/avis/';
  constructor(private http: HttpClient) {}

  getAvis(): Observable<IAvis[]> {
    return this.http.get<IAvis[]>(this.API_URL_AVIS);
  }
  getAvisOneVideo(id_video: number): Observable<IAvis[]> {
    return this.http.get<IAvis[]>(`${this.API_URL_AVIS}?video=${id_video}`);
  }
  // TODO tester/valider les foncdtions suivantes
  getOneAvis(id: number): Observable<IAvis> {
    return this.http.get<IAvis>(`${this.API_URL_AVIS}?id=${id}`);
  }
  addAvis(video: IAvis): Observable<void> {
    return this.http.post<void>(this.API_URL_AVIS, video, httpOptions);
  }
  updateAvis(video: IAvis): Observable<void> {
    return this.http.put<void>(
      `${this.API_URL_AVIS}?id=${video.id}`,
      video,
      httpOptions
    );
  }
  deleteAvis(id: number): Observable<IAvis[]> {
    return this.http.delete<IAvis[]>(`${this.API_URL_AVIS}?id=${id}`);
  }
}
