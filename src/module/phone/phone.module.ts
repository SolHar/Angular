import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneKeyboardComponent } from './phone-keyboard/phone-keyboard.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    PhoneKeyboardComponent,
    PhoneComponent,
  ],
  imports: [
    CommonModule,
    PhoneRoutingModule
  ]
})
export class PhoneModule { }
