import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SongService } from './song.service';
import { StationComponent } from './station/station.component';
import { PlaylistcreatorComponent } from './subcomponents/playlistcreator/playlistcreator.component';
import { TagdisplayComponent } from './subcomponents/tagdisplay/tagdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    PlaylistcreatorComponent,
    TagdisplayComponent,
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
