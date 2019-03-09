import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private _http:HttpClient) { }
  playlists(){
    return this._http.get('/api/playlist/all')
  }
  playlistshow(pid){
    return this._http.get('/api/playlist/'+pid)
  }
  stationshow(tid){
    return this._http.get('/api/station/'+tid)
  }
  songshow(sid){
    return this._http.get('/api/song/'+sid)
  }
  randomsong(){
    return this._http.get('/api/randomsong');
  }
  stationnext(tid){
    return this._http.get('/api/station/'+tid+'/nexttrack');
  }
  editsong(sid,edits){
    return this._http.post('/api/'+sid, edits);
  }
  likesong(tid,sid){
    return this._http.get('/api/station/'+tid+'/likesong/'+sid);
  }
  dislikesong(tid,sid){
    return this._http.get('/api/station/'+tid+'/dislikesong/'+sid);
  }

}
