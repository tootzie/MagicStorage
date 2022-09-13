import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSubjectPage } from './edit-subject.page';

const routes: Routes = [
  {
    path: '',
    component: EditSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSubjectPageRoutingModule {}
