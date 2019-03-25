import { Component, OnInit } from '@angular/core';
import { SongService } from '../../song.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlistcreator',
  templateUrl: './playlistcreator.component.html',
  styleUrls: ['./playlistcreator.component.css']
})
export class PlaylistcreatorComponent implements OnInit {
  genres:any;
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
    var tags = this.tags;
    this.songservice.indextag().subscribe((data:any)=>{
      var tagkeys=Object.keys(data);
      for (var k of tagkeys){
        for (var item of data[k]){
          tags.push(item)
        }
      };
      this.tags=tags;
    })
  }
  createplaylist(){
    console.log(this.creation);
    this.songservice.createplaylist(this.creation).subscribe((data:any)=>{console.log(data)});
    this.creation={"genres":[],"tags":[],'name':'','description':''}
  }
}
