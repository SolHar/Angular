import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavorisModule } from './favoris.module';
import { FavorisComponent } from './favoris/favoris.component';


const routes: Routes = [
  {
    path : '',
    component : FavorisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorisRoutingModule { }
