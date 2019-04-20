import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"map", component:MapComponent},
  {path:"users", component:UsersComponent},
  {path:"users/form", component:FormComponent},
  {path:"users/:id/edit", component:FormComponent},
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: '**', redirectTo: '/map', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
