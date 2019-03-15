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
  songshow(sid,edits?){
    if (edits){return this._http.post('/api/song/'+sid, edits)};
    return this._http.get('/api/song/'+sid)
  }
  randomsong(){
    return this._http.get('/api/randomsong');
  }
  stationnext(tid){
    return this._http.get('/api/station/'+tid+'/nexttrack');
  }
  likesong(tid,sid){
    return this._http.get('/api/station/'+tid+'/likesong/'+sid);
  }
  dislikesong(tid,sid){
    return this._http.get('/api/station/'+tid+'/dislikesong/'+sid);
  }
  createtag(sid,tag){
    return this._http.post('/api/song/'+sid+'/createtag',tag)
  }
  indextag(){
    return this._http.get('/api/tag/all')
  }
  addtag(sid,tgid){
    return this._http.get('/api/song/'+sid+'/add/'+tgid);
  }
  removetag(sid,tgid){
    return this._http.get('/api/song/'+sid+'/remove/'+tgid);
  }

}
