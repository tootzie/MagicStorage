import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Notes, User } from '../notes.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalNoteService } from '../global-note.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.page.html',
  styleUrls: ['./recycle-bin.page.scss'],
})
export class RecycleBinPage implements OnInit {
  private notesCol : AngularFirestoreCollection<Notes>;
  private notesCloud : Observable<Notes[]>;
  id : string;
  
  constructor(public route : ActivatedRoute, private fireStore : AngularFirestore, public router : Router, public globalSubId : GlobalNoteService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.globalSubId.setIdSub(this.id);
    this.notesCol = this.fireStore.collection<User>('User').doc(globalSubId.getloginid()).collection('Subject').doc(this.id).collection('Notes');
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

  Restore(id){
    this.notesCol.doc(id).update({
      delete : 0
    });
  }

  Delete(id){
    this.notesCol.doc(id).delete();
  }
}
