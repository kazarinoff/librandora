import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationComponent } from './station/station.component';

const routes: Routes = [
  {path:'playlist/:pid',component:StationComponent},
  {path:'radio',component:StationComponent},
  {path:'station/:tid',component:StationComponent},
  {path:'**',redirectTo:'radio'},
  {path:'',pathMatch:'full',redirectTo:'radio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
