import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SongService} from '../song.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  pagetype=''
  song={"id": 3215, "location": "../../music/itunes/itunes media/music\\Dr. Dre\\2001\\11 The Next Episode.m4a", "album": "2001", "rating": 0, "length": "", "mood": "", "title": "The Next Episode", "artist": "Dr. Dre", "albumartist": "", "tracknumber": "", "genre": "Rap", "date": "", "originaldate": "1999", "performer": "", "comment": "", "tags": []};
  station={"station":{"id": 1, "name": "funky", "description": "testing a radio playlist"},'songlist':[],'song':{"id": 3215, "location": "../../music/itunes/itunes media/music\\Dr. Dre\\2001\\11 The Next Episode.m4a", "album": "2001", "rating": 0, "length": "", "mood": "", "title": "The Next Episode", "artist": "Dr. Dre", "albumartist": "", "tracknumber": "", "genre": "Rap", "date": "", "originaldate": "1999", "performer": "", "comment": "", "tags": []}}
  playlist={"playlist":{"id": 1, "name": "funky", "description": "testing a radio playlist", "kind": "radio"},'songlist':[],'songs':{}}
  songindex=0;

  constructor(private songservice:SongService, private _route:ActivatedRoute, private _router:Router){}
  object=Object
  ngOnInit(){
    this.pagetype=this._route.routeConfig.path.split("/",1)[0];
    switch (this.pagetype){
      case 'station': {
        this._route.params.subscribe((params:Params)=> {
          this.songservice.stationshow(params.tid).subscribe((data: any)=>{
            if (data){
              this.station=data;
              this.song=this.station.song;
              this.startaudio();
            }
            else {this.pagetype='radio';this.randomtrack()}
          })
        });
        break;
      }
      case 'playlist':{
        this._route.params.subscribe((params:Params)=> {
          this.songservice.playlistshow(params.pid).subscribe((data: any)=>{
            if (data){
            this.playlist=data;
            this.songservice.songshow(this.playlist.songlist[0]).subscribe((data:any)=>{
              this.song=data;
              this.startaudio();
              })
            } 
            else {this.pagetype='radio';this.randomtrack()}
          })
        })
        break;
      }
      default: {this.pagetype='radio'; this.randomtrack();break;}
    }
  }
  @ViewChild('radioplayer') radioplayer: ElementRef;

  pauseaudio() {
      let radio: HTMLAudioElement = this.radioplayer.nativeElement as HTMLAudioElement;
      if (radio.paused){radio.play()}
      else {radio.pause()}
  }
  startaudio(){
    let radio: HTMLAudioElement = this.radioplayer.nativeElement as HTMLAudioElement;
    radio.play()
  }
  likesong(){
    this._route.routeConfig.path
    this.songservice.likesong(this.station.station.id,this.song.id).subscribe((data:any)=>{})
  }
  dislikesong(){
    this.songservice.dislikesong(this.station.station.id,this.song.id).subscribe((data:any)=>{});
    this.nexttrack();
  }
  removesong(){
    this.songservice.removesong(this.playlist.playlist.id,this.song.id).subscribe((data:any)=>{});
    this.nexttrack();
  }
  editsong(){
    this.songservice.songshow(this.song.id,{rating:this.song.rating}).subscribe((data:any) => {})
  }
  randomtrack(){
    let radio: HTMLAudioElement = this.radioplayer.nativeElement as HTMLAudioElement;
    radio.pause();
    this.songservice.randomsong().subscribe((data:any)=>{this.song=data; radio.play()});
  }
  nexttrack(){
    console.log(this.pagetype)
    let radio: HTMLAudioElement = this.radioplayer.nativeElement as HTMLAudioElement;
    radio.pause();
    switch(this.pagetype){
      case "station": {
        this.songservice.stationnext(this.station.station.id).subscribe((data:any)=>{this.song=data;radio.play()})
        break;
      }
      case 'playlist':{
        if ((this.songindex+1) >= (this.playlist.songlist.length)){this.songindex=0;}
        else {this.songindex ++};
        this.songservice.songshow(this.playlist.songlist[this.songindex]).subscribe((data:any)=>{this.song=data; radio.play()});
        break;
      }
      default: {this.randomtrack();break;}
    }
  }
}
