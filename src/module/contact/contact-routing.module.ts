import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact.module';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { NewcontactComponent} from './newcontact/newcontact.component';



const routes: Routes = [
  {
    path : '',
    component : ContactComponent,
    //route enfant de Contact
    children : [


    ]
  },
  {
    path : 'new',
    component : NewcontactComponent
  },
  {
    path : ':id',
    component : DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
