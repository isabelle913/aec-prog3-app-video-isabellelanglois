import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iscore } from 'src/app/interfaces/iscore';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  API_URL_SCORE = 'http://localhost/api-videos/scores/';
  //http://localhost/api-videos/scores/?video=21&action=add
  //http://localhost/api-videos/scores/?video=23&action=lower

  constructor(private http: HttpClient) {}

  getScore(id_video: number) {
    return this.http.get<Iscore>(`${this.API_URL_SCORE}?id=${id_video}`);
  }

  updateScore(id_video: number, action: string) {
    return this.http.patch<void>(
      `${this.API_URL_SCORE}?video=${id_video}&action=${action}`,
      id_video
    );
  }
}
