import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Notes, Subject } from '../notes.model';
import { AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalNoteService } from '../global-note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  private notesCol : AngularFirestoreCollection<Notes>;
  private note : Notes;

  id : any;
  title : string;
  notess : string;
  id_note : any;
  id_sub : any;

  constructor(private fireStore : AngularFirestore,
    public alertController : AlertController,
    public toastController : ToastController,
    public router : Router,
    public route : ActivatedRoute,
    public globalSubId : GlobalNoteService) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.notesCol = this.fireStore.collection<Subject>('User').doc(globalSubId.getloginid()).collection('Subject').doc(this.id).collection('Notes');
      //this.notesCol = this.fireStore.collection('Subject').doc(this.id).collection('Notes');
      this.id_note = this.notesCol.snapshotChanges().subscribe(actions => {
        this.setId(actions.length)
      });
      this.id_sub = this.globalSubId.getIdSub();
    }

  ngOnInit() {
  }

  async success() {
    const toast = await this.toastController.create({
      message: 'Note added successfully',
      duration: 1000,
      color : 'dark'
    });
    toast.present();
  }

  add(){
    this.note = {
      id : 'Note-' + this.id_note,//this.globalIncrement.getIncrement(),
      title : this.title,
      notes : this.notess,
      delete : 0
    }
    this.notesCol.doc(this.note.id).set(this.note);
    this.success();
    this.router.navigate(['/notes', this.id_sub]);
  }

  setId(id){
    this.id_note = id;
  }

}
