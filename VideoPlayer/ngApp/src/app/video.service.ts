import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = '/api/videos';
  private _postUrl = '/api/videos';
  private _putUrl = '/api/videos/';
  private _deleteUrl = '/api/videos/';
  constructor(private _http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this._http.get<Video[]>(this._getUrl);
  }

  addVideo(video: Video): Observable<Video> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this._http.post<Video>(this._postUrl, JSON.stringify(video), options);
  }

  updateVideo(video: Video): Observable<Video> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this._http.put<Video>(this._putUrl + video._id, JSON.stringify(video), options);
  }

  deleteVideo(video: Video): Observable<Video> {
    return this._http.delete<Video>(this._deleteUrl + video._id);
  }
}
