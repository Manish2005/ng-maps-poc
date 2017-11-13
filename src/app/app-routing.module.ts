import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapTestComponent } from './map-test/map-test.component';
import { FormTestComponent } from './form-test/form-test.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'form',
  pathMatch: 'full'
}, {
  path: 'form',
  component: FormTestComponent
}, {
  path: 'map',
  component: MapTestComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
