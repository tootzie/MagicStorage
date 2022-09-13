import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSubjectPageRoutingModule } from './edit-subject-routing.module';

import { EditSubjectPage } from './edit-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSubjectPageRoutingModule
  ],
  declarations: [EditSubjectPage]
})
export class EditSubjectPageModule {}
