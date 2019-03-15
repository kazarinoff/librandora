import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SongService} from '../song.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  title = 'public';
  song={"id": 3215, "location": "../../music/itunes/itunes media/music\\Dr. Dre\\2001\\11 The Next Episode.m4a", "album": "2001", "rating": 0, "length": "", "mood": "", "title": "The Next Episode", "artist": "Dr. Dre", "albumartist": "", "tracknumber": "", "genre": "Rap", "date": "", "originaldate": "1999", "performer": "", "comment": "", "tags": []};
  songindex=0;
  station={"station":{"id": 1, "name": "funky", "description": "testing a radio playlist"},'songlist':[],'song':{"id": 3215, "location": "../../music/itunes/itunes media/music\\Dr. Dre\\2001\\11 The Next Episode.m4a", "album": "2001", "rating": 0, "length": "", "mood": "", "title": "The Next Episode", "artist": "Dr. Dre", "albumartist": "", "tracknumber": "", "genre": "Rap", "date": "", "originaldate": "1999", "performer": "", "comment": "", "tags": []}}
  audio =new Audio();
  tag= {name:''}
  alltags=[{'name':'','id':1,'songtagged':false}]
  constructor(private songservice:SongService, private _route:ActivatedRoute, private _router:Router){}
  ngOnInit(){
    this._route.params.subscribe((params:Params)=> {
      this.songservice.stationshow(params.tid).subscribe((data: any)=>{
        this.station=data;
        this.song=this.station.song;
        this.startaudio();
      })
    });
    this.songservice.indextag().subscribe((data:any)=>{this.alltags=data; this.checktags()});
  }
    startaudio(){
    this.audio.src = this.song.location;
    this.audio.play()
  }
  checktags(){
    var thesong=this.song;
    for (let x of this.alltags){
      if (thesong.tags.includes(x.id)){x.songtagged=true}
      else {x.songtagged=false}
    }
  }
  switchtag(x){
    if (this.alltags[x].songtagged){
      this.alltags[x].songtagged=false;
      this.songservice.removetag(this.song.id,this.alltags[x].id).subscribe((data:any)=>{})
    }
    else {this.alltags[x].songtagged=true;
      this.songservice.addtag(this.song.id,this.alltags[x].id).subscribe((data:any)=>{})
    }
  }

  pauseaudio(){
    if (this.audio.paused) { this.audio.play()}
    else {this.audio.pause()}
  }
  likesong(){
    this.songservice.likesong(this.station.station.id,this.song.id).subscribe((data:any)=>{})
  }
  dislikesong(){
    this.songservice.dislikesong(this.station.station.id,this.song.id).subscribe((data:any)=>{});
    this.nexttrack();
  }
  editsong(){
    this.songservice.songshow(this.song.id,{rating:this.song.rating}).subscribe((data:any) => {})
  }
  randomtrack(){
    this.audio.pause();
    this.songservice.randomsong().subscribe((data:any)=>{this.song=data; this.startaudio();this.checktags()})
  }
  nexttrack(){
    this.audio.pause()
    this.songservice.stationnext(this.station.station.id).subscribe((data:any)=>{
      this.song=data;
      this.audio.src=this.song.location
      this.audio.play();
      this.checktags()
    })
  }
  addtag(){
    this.songservice.createtag(this.song.id,this.tag).subscribe((data:any)=>{this.song=data})
  }
}
