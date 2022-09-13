import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecycleBinPage } from './recycle-bin.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecycleBinPageRoutingModule {}
