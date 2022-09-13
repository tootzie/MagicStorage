import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Subject } from '../notes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GlobalNoteService } from '../global-note.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.page.html',
  styleUrls: ['./edit-subject.page.scss'],
})
export class EditSubjectPage implements OnInit {
  private subjectCol : AngularFirestoreCollection<Subject>;
  id : string;
  name : string;
  description : string;
  lecture : string;
  item : any;

  constructor(private fireStore : AngularFirestore, 
    public route : ActivatedRoute, 
    public toastController : ToastController,
    public router : Router,
    public globalSub : GlobalNoteService
    ) { 
    this.subjectCol = this.fireStore.collection<Subject>('User').doc(globalSub.getloginid()).collection('Subject');
    //this.subjectCol = this.fireStore.collection<Subject>('Subject');
    this.id = this.route.snapshot.paramMap.get('id');
    this.subjectCol.doc(this.id).get().subscribe(value => {
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
      message: 'Edit success',
      duration: 1000,
      color : 'dark'
    });
    toast.present();
  }

  add(item){
    this.name = this.item.name;
    this.description = this.item.description;
    this.lecture = this.item.lecturer;
  }

  edit(id : string){
    this.subjectCol.doc(this.id).update({
      name : this.name,
      description : this.description,
      lecturer : this.lecture
    });
    this.success();
    this.router.navigate(['/subject']);
  }

}
