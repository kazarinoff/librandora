import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SongService } from './song.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { RadioComponent } from './radio/radio.component';
import { StationComponent } from './station/station.component';
import { PlaylistcreatorComponent } from './playlistcreator/playlistcreator.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    RadioComponent,
    StationComponent,
    PlaylistcreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
