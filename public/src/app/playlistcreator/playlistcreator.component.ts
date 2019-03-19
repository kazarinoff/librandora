import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlistcreator',
  templateUrl: './playlistcreator.component.html',
  styleUrls: ['./playlistcreator.component.css']
})
export class PlaylistcreatorComponent implements OnInit {
  genres=[]
  tags=[]
  creation={"genres":[],"tags":[],'name':'','description':''}
  constructor(private songservice:SongService, private _route:ActivatedRoute, private _router:Router){}

  ngOnInit() {
    this.genresindex();
    this.tagsindex();
  }
  genresindex(){
    this.songservice.indexgenre().subscribe((data:any)=>{this.genres=data})
  }
  tagsindex(){
    this.songservice.indextag().subscribe((data:any)=>{this.tags=data})
  }
  createplaylist(){
    this.songservice
  }
}
