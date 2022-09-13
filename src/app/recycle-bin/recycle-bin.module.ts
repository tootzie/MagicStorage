import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecycleBinPageRoutingModule } from './recycle-bin-routing.module';

import { RecycleBinPage } from './recycle-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecycleBinPageRoutingModule
  ],
  declarations: [RecycleBinPage]
})
export class RecycleBinPageModule {}
