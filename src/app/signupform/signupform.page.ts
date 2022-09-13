import { Component, OnInit } from '@angular/core';
import { GlobalNoteService } from '../global-note.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../notes.model';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.page.html',
  styleUrls: ['./signupform.page.scss'],
})
export class SignupformPage implements OnInit {
  private usercol : AngularFirestoreCollection<User>;
  private usercloud: Observable<any>;
  user : User ;
  username= "";
  password="";
  name="";
  ids : any;
  constructor(public globalIncrement : GlobalNoteService,private fireStore : AngularFirestore,public toastController : ToastController, public router : Router) { 
    this.usercol = this.fireStore.collection('User');

    this.ids = this.usercol.snapshotChanges().subscribe(actions => {
      this.setid(actions.length)
  });
  }

  ngOnInit() {
  }

  setid(id){
    this.ids=id;
  }

  async fail() {
    const toast = await this.toastController.create({
      message: 'Username is Existed please choose another one!',
      duration: 1000,
      color : 'dark'
    });
    toast.present();
  }

  async success() {
    const toast = await this.toastController.create({
      message: 'Account is successfuly created!',
      duration: 1000,
      color : 'dark'
    });
    toast.present();
  }


  signup(){
    var masuk=false;
    this.fireStore.collection(`User`, ref => 
      ref.where('username', "==", this.username)).snapshotChanges().subscribe(res => 
        {
      if(masuk == false){
        if (res.length > 0){
        console.log("Username is found");
        this.fail();
        }
        else{
        console.log("Username has not been taken");
        this.add();
        masuk=true;
        }
      }
  });
  }

  add(){
    this.user = {
      username : this.username,
      password : this.password,
      name : this.name,
      id : "User-"+this.ids
    }
    if(this.username == "" || this.password == "" || this.name == ""){
      
    }else{
      this.usercol.doc(this.user.id).set(this.user);
      this.success();
      this.router.navigate(['/home']);
    }
  }

}
