import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SongService} from '../song.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  title = 'public';
  song={"id": 9709, "location": "../../music/MusicBee\\Ripped Files\\De La Soul\\And the Anonymous Nobody\\02 Royalty Capes.mp3", "album": "And the Anonymous Nobody", "source": "", "bpm": "", "compilation": "", "rating": 0, "composer": "", "copyrightdate": "", "encodedby": "", "lyricist": "", "length": "", "media": "", "mood": "", "title": "Royalty Capes", "version": "", "artist": "De La Soul", "albumartist": "De La Soul", "conductor": "", "arranger": "", "discnumber": "", "tracknumber": "2/17", "author": "", "isrc": "", "discsubtitle": "", "language": "", "genre": "Hip Hop", "date": "2016", "originaldate": "", "performer": "", "organization": "", "musicbrainz_trackid": "", "website": "", "replaygain": "", "replaygainpeak": "", "musicbrainz_artistid": "", "musicbrainz_albumid": "", "musicbrainz_albumartistid": "", "musicbrainz_trmid": "", "musicip_puid": "", "musicip_fingerprint": "", "musicbrainz_albumstatus": "", "musicbrainz_albumtype": "", "releasecountry": "", "musicbrainz_discid": "", "asin": "", "barcode": "", "catalognumber": "", "musicbrainz_releasetrackid": "", "musicbrainz_releasegroupid": "", "performer2": "", "musicbrainz_workid": "", "acoustid_fingerprint": "", "acoustid_id": "", "playbackgap": "", "comment": "", "work": "", "movement": ""};
  radioplayer;
  playlists;
  playlist={"id": 1, "name": "funky", "description": "testing a radio playlist", "kind": "radio"}
  audio =new Audio();
  constructor(private songservice:SongService, private _route:ActivatedRoute, private _router:Router){}
  ngOnInit(){
    this._route.params.subscribe((params:Params)=> {
      console.log(params);
      this.songservice.playlistshow(params.pid).subscribe((data: any)=>{this.playlist=data});
      console.log("HERE");
      this.songservice.playlistfirstsong(params.pid).subscribe((data:any)=>{
        this.song=data; 
        this.startaudio();
        console.log('audio should start now')
      })
    })

  }
  nexttrack(){
    this.audio.pause();
    this.songservice.playlistnextsong(this.playlist.id,this.song).subscribe((data:any)=>{this.song=data})}
  
  startaudio(){
    this.audio.src = this.song.location;
    var x= this.audio.load()
    if (x !== undefined){this.audio.play()}
  }
  pauseaudio(){
    if (this.audio.paused) { this.audio.play()}
    else {this.audio.pause()}
  }
}
