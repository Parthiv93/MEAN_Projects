import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = '/api/videos';
  constructor(private _http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this._http.get<Video[]>(this._getUrl);
  }
}
