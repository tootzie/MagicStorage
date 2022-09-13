import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Notes, Subject } from '../notes.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GlobalNoteService } from '../global-note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  private notesCol : AngularFirestoreCollection<Notes>;
  private notesCloud : Observable<Notes[]>;
  id : string;

  constructor(public route : ActivatedRoute, private fireStore : AngularFirestore, public router : Router, public globalSubId : GlobalNoteService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.globalSubId.setIdSub(this.id);
    this.notesCol = this.fireStore.collection<Subject>('User').doc(globalSubId.getloginid()).collection('Subject').doc(this.id).collection('Notes');
    // this.notesCol = this.fireStore.collection('Subject').doc(this.id).collection('Notes');
    this.notesCloud = this.notesCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
  }

  ngOnInit() {
  }

  addNote(){
    this.router.navigate(['/add-note', this.id]);
  }

  editNote(id){
    console.log(id);
    this.router.navigate(['/edit-note', id]);
  }

  deleteNote(id){
    //this.notesCol.doc(id).delete();
    this.notesCol.doc(id).update({
      delete : 1
    });
  }

  bin(){
    this.router.navigate(['/recycle-bin', this.id]);
  }
}
