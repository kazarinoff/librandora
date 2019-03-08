import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SongService} from './song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private songservice:SongService, private _route:ActivatedRoute, private _router:Router){}
  ngOnInit(){}
}
