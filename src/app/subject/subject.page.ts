import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from '../notes.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { GlobalNoteService } from '../global-note.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  private subjectCol : AngularFirestoreCollection<Subject>;
  private subjectCloud : Observable<Subject[]>;
  private isiImg : string[];

  constructor(public router : Router, private fireStore : AngularFirestore, private globalSub : GlobalNoteService, public alertController : AlertController) {
    this.subjectCol = this.fireStore.collection<Subject>('User').doc(globalSub.getloginid()).collection('Subject');
    this.isiImg = [...globalSub.isiImg];
    this.subjectCloud = this.subjectCol.snapshotChanges().pipe(
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

  addSubject(){
    this.router.navigate(['/add-subject']);
    
  }

  editSubject(id : string){
    this.router.navigate(['/edit-subject',id]);
  }

  deleteSubject(id : string){
    this.subjectCol.doc(id).delete();
  }

  notes(id : string){
    this.router.navigate(['/notes',id]);
  }

  logout(){
    this.globalSub.setloginid("");
    this.router.navigate(['/home']);
  }
}
