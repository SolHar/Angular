import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { ChangeIconFontsizeWhenHoverDirective } from './directives/change-icon-fontsize-when-hover.directive';


@NgModule({
  declarations: [ContactComponent, DetailComponent, NewcontactComponent, ContactNamePipe, ChangeIconFontsizeWhenHoverDirective],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ]
})
export class ContactModule { }
