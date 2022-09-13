import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Subject } from '../notes.model';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalNoteService } from '../global-note.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.page.html',
  styleUrls: ['./add-subject.page.scss'],
})
export class AddSubjectPage implements OnInit {

  private subjectCol : AngularFirestoreCollection<Subject>;
  private subject : Subject;

  name : string ="";
  description : string = "";
  lecture : string="";
  ids : any;


  constructor(private fireStore : AngularFirestore, 
    public alertController : AlertController, 
    public toastController : ToastController, 
    public router : Router,
    public globalSub : GlobalNoteService) { 
    // this.subjectCol = this.fireStore.collection<Subject>('Subject');
    this.subjectCol = this.fireStore.collection<Subject>('User').doc(globalSub.getloginid()).collection('Subject');
    this.ids = this.subjectCol.snapshotChanges().subscribe(actions => {
        this.setId(actions.length)
    });
  }

  ngOnInit() {
  }

  async fillOut() {
    const alert = await this.alertController.create({
      header: 'Adding Subject Failed',
      message: 'Please fill out all the form',
      buttons: ['OK']
    });

    await alert.present();
  }

  async success() {
    const toast = await this.toastController.create({
      message: 'Subject added successfully',
      duration: 1000,
      color : 'dark'
    });
    toast.present();
  }

  add(){
      console.log(this.ids);
      this.subject = {
        id : 'Sub-' + this.ids,
        name : this.name,
        description : this.description,
        lecturer : this.lecture,
        img : Math.floor(Math.random() * 5).toString(),
      }
      if(this.name == "" || this.description=="" || this.lecture==""){
          this.fillOut();
      }else{
        this.subjectCol.doc(this.subject.id).set(this.subject);
        this.success();
        this.router.navigate(['/subject']);
      }
    }

  setId(id){
    this.ids = id;
  }

}
