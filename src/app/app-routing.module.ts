import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathLocationStrategy } from '@angular/common';


const routes: Routes = [

  {
    //une Route = une page = une url
    path : 'phone',
    //charger un sous module
    loadChildren:() => import('../module/phone/phone.module').then(m =>m.PhoneModule),

  },
  {
    path : 'contact',
    loadChildren:() => import('../module/contact/contact.module').then(m =>m.ContactModule)
  },

  {
    path : 'favoris',
    loadChildren:() => import('../module/favoris/favoris.module').then(m =>m.FavorisModule)
  },



  // Permet la redirection, page par default dans cet exemple.
  {
    path : '',
    redirectTo : '/phone',
    pathMatch : 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
