import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathLocationStrategy } from '@angular/common';


const routes: Routes = [
  {
    //une Route = une page = une url
    path : 'phone',
    //charger un sous module
    loadChildren:() => import('../module/phone/phone.module').then(m =>m.PhoneModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
