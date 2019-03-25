import { Component, OnInit, Input } from '@angular/core';
import { SongService } from '../../song.service';

@Component({
  selector: 'app-tagdisplay',
  templateUrl: './tagdisplay.component.html',
  styleUrls: ['./tagdisplay.component.css']
})
export class TagdisplayComponent implements OnInit {
  private _song:any;
  get song():any{return this._song;}
  tag= {name:'',kind:''}
  alltags={'genres':[],'decades':[],'moods':[],'styles':[],'misc':[]}
  object=Object
  
  @Input() set song(inputsong:any) {
    this._song=inputsong;
    this.checktags();
    }

  constructor(private songservice:SongService) { }

  ngOnInit() {
    this.songservice.indextag().subscribe((data:any)=>{this.alltags=data; this.checktags()});
  }
  checktags(){
    var thesong=this._song;
    var tagtypes=Object.keys(this.alltags);
    for (let i of tagtypes){
      for (let h of this.alltags[i]){
        if (thesong.tags.includes(h.id)){h.songtagged=true}
        else {h.songtagged=false}
      }
    }
  }

  switchtag(i,x){
    if (this.alltags[i][x].songtagged){
      this.alltags[i][x].songtagged=false;
      this.songservice.removetag(this.song.id,this.alltags[i][x].id).subscribe((data:any)=>{})
    }
    else {this.alltags[i][x].songtagged=true;
      this.songservice.addtag(this.song.id,this.alltags[i][x].id).subscribe((data:any)=>{})
    }
  }
  createtag(){
    this.songservice.createtag(this.song.id,this.tag).subscribe((data:any)=>{
      this.song=data;
      this.songservice.indextag().subscribe((data:any)=>{this.alltags=data; this.checktags()});
      this.tag={name:'',kind:''}
    })
  }

}
