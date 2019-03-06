import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private _http:HttpClient) { }

  randomsong(){
    console.log('randomsong')
    return this._http.get('/api/randomsong');
  }
  editsong(sid,edits){
    return this._http.post('/api/'+sid, edits);
  }
}
