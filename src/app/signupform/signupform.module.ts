import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupformPageRoutingModule } from './signupform-routing.module';

import { SignupformPage } from './signupform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupformPageRoutingModule
  ],
  declarations: [SignupformPage]
})
export class SignupformPageModule {}
