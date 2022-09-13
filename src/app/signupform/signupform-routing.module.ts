import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupformPage } from './signupform.page';

const routes: Routes = [
  {
    path: '',
    component: SignupformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupformPageRoutingModule {}
