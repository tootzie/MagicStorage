import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNotePageRoutingModule } from './add-note-routing.module';

import { AddNotePage } from './add-note.page';

import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  imports: [
    AutosizeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddNotePageRoutingModule
  ],
  declarations: [AddNotePage]
})
export class AddNotePageModule {}
