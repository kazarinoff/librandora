import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SongService} from './song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  song={"id": 6830, "location": "../../music/iTunes\\iTunes Media\\Music\\Rise Up Singing\\Disk M_ Farm & Prairie_Mountain Voices\\34 Roll On, Columbia.m4a", "album": "['Disk M: Farm & Prairie/Mountain Voices']", "source": "", "bpm": "", "compilation": "False", "rating": 0, "composer": "", "copyrightdate": "", "encodedby": "", "lyricist": "", "length": "", "media": "", "mood": "", "title": "['Roll On, Columbia']", "version": "", "artist": "['Rise Up Singing']", "albumartist": "", "conductor": "", "arranger": "", "discnumber": "", "tracknumber": "", "author": "", "isrc": "", "discsubtitle": "", "language": "", "genre": "['Folk']", "date": "", "originaldate": "", "performer": "", "organization": "", "musicbrainz_trackid": "", "website": "", "replaygain": "", "replaygainpeak": "", "musicbrainz_artistid": "", "musicbrainz_albumid": "", "musicbrainz_albumartistid": "", "musicbrainz_trmid": "", "musicip_puid": "", "musicip_fingerprint": "", "musicbrainz_albumstatus": "", "musicbrainz_albumtype": "", "releasecountry": "", "musicbrainz_discid": "", "asin": "", "barcode": "", "catalognumber": "", "musicbrainz_releasetrackid": "", "musicbrainz_releasegroupid": "", "performer2": "", "musicbrainz_workid": "", "acoustid_fingerprint": "", "acoustid_id": "", "playbackgap": "", "comment": "", "work": "", "movement": ""};
  radioplayer;
  audio =new Audio();
  constructor(private songservice:SongService, private _route:ActivatedRoute, private _router:Router){}
  ngOnInit(){
    this.songservice.randomsong().subscribe((data:any)=>{
      this.song=data;
      this.startaudio();
    })

  }
  randomtrack(){
    this.audio.pause();
    this.songservice.randomsong().subscribe((data:any)=>{this.song=data; this.startaudio()})}
  
  startaudio(){
    this.audio.src = this.song.location;
    this.audio.load();
    this.audio.play();
  }
  pauseaudio(){
    if (this.audio.paused) { this.audio.play()}
    else {this.audio.pause()}
  }
  editsong(){
    this.songservice.editsong(this.song.id,{rating:this.song.rating}).subscribe((data:any) => {})
  }
}
