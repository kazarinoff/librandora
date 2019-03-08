import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { RadioComponent } from './radio/radio.component';
import { StationComponent } from './station/station.component';

const routes: Routes = [
  {path:'playlist/:pid',component:PlaylistComponent},
  {path:'radio',component:RadioComponent},
  {path:'playlist/:pid',component:PlaylistComponent},
  {path:'station/:tid',component:StationComponent},
  {path:'**',redirectTo:'radio'},
  {path:'',pathMatch:'full',redirectTo:'radio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
