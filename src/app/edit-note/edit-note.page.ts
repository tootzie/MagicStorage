import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Notes, Subject } from '../notes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalNoteService } from '../global-note.service';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {

  private notesCol : AngularFirestoreCollection<Notes>;
  private notesCloud : Observable<Notes[]>;
  private document : any;

  id : any;
  item : any;
  title : string;
  notes : string;

  constructor(private fireStore : AngularFirestore, 
    public route : ActivatedRoute, 
    public globalSubId : GlobalNoteService, 
    public toastController : ToastController,
    public router : Router) { 
    this.notesCol = this.fireStore.collection<Subject>('User').doc(globalSubId.getloginid()).collection('Subject').doc(this.globalSubId.getIdSub()).collection('Notes');
    //this.notesCol = this.fireStore.collection('Subject').doc(this.globalSubId.getIdSub()).collection('Notes');
    this.id = this.route.snapshot.paramMap.get('id');
    this.notesCol.doc(this.id).get().subscribe(value => {
      const data = value.data();
      this.item = data;
      console.log(this.item);
      this.add(this.item);
    });
    
  }

  ngOnInit() {
  }

  async success() {
    const toast = await this.toastController.create({
      message: 'Note Saved',
      duration: 1000,
      color : 'dark'
    });
    toast.present();
  }
  
  add(item){
    this.title = this.item.title;
    this.notes = this.item.notes;
  }

  save(){
    this.notesCol.doc(this.id).update({
      title : this.title,
      notes : this.notes
    });
    this.success();
    this.router.navigate(['/notes', this.globalSubId.getIdSub()]);
  }
}
