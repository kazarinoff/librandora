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
  songshow(sid){
    return this._http.get('/api/song/'+sid)
  }
  playlistnextsong(pid,currentsong){
    console.log('service getting next song')
    return this._http.post('/api/playlist/'+pid+'/song',currentsong)
  }
  randomsong(){
    console.log('randomsong')
    return this._http.get('/api/randomsong');
  }
  editsong(sid,edits){
    return this._http.post('/api/'+sid, edits);
  }
}
