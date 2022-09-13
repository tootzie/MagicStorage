import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'subject',
    loadChildren: () => import('./subject/subject.module').then( m => m.SubjectPageModule)
  },
  {
    path: 'add-subject',
    loadChildren: () => import('./add-subject/add-subject.module').then( m => m.AddSubjectPageModule)
  },
  {
    path: 'edit-subject/:id',
    loadChildren: () => import('./edit-subject/edit-subject.module').then( m => m.EditSubjectPageModule)
  },
  {
    path: 'notes/:id',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'add-note/:id',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'edit-note/:id',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },
  {
    path: 'loginform',
    loadChildren: () => import('./loginform/loginform.module').then( m => m.LoginformPageModule)
  },
  {
    path: 'signupform',
    loadChildren: () => import('./signupform/signupform.module').then( m => m.SignupformPageModule)
  },
  {
    path: 'recycle-bin/:id',
    loadChildren: () => import('./recycle-bin/recycle-bin.module').then( m => m.RecycleBinPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
