import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalNoteService } from '../global-note.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { User } from '../notes.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {
  private usercol: AngularFirestoreCollection<User>;
  private usercloud: Observable<any>;
  username: string;
  password: string;
  id: any;
  item: any;
  constructor(public router: Router, public globvar: GlobalNoteService, private fireStore: AngularFirestore, public toastController: ToastController) {

  }

  ngOnInit() {
  }
  async fail() {
    const toast = await this.toastController.create({
      message: 'Username atau password salah!!',
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }

  setid(other) {
    this.id = other;
    this.globvar.setloginid(this.id);
    this.router.navigate(['/subject']);
  }

  login() {
    // //coba coba cara2
    // this.usercloud = this.fireStore.collection<User>(`User`, ref =>
    //   ref.where('username', "==", this.username).where("password", "==", this.password)).snapshotChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         console.log(id,"Masuk");
    //         return { id, ...data };
    //       })
    //     })
    //   )

    // this.usercloud.subscribe(value => {
    //   value.forEach(element => {
    //     console.log(element.id," ",element.username,element.name);
    //     this.id = element.id;
    //   });
    // })



    // //experimen
    // var lastid : string = "";
    // var temp : string = "";
    // var newid : number;
    // this.usercloud = this.fireStore.collection<User>(`User`, ref =>
    //   ref.orderBy("id","desc").limit(1)).snapshotChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { id, ...data };
    //       })
    //     })
    //   )

    // this.usercloud.subscribe(value => {
    //   value.forEach(element => {
    //     console.log(element.id," ",element.username,element.name);
    //     lastid = element.id;
    //     for(var i=5;i<=lastid.length;i++){
    //       temp+=lastid.charAt(i);
    //     }
    //     newid=parseInt(temp)+1;
    //     console.log(newid);


    //   });
    // })

    // cara1 (Berhasil)
      var fin = false;
      this.fireStore.collection(`User`, ref => 
        ref.where('username', "==", this.username).where("password","==",this.password)
        ).snapshotChanges().subscribe(res => 
          {
          //if(!fin){
            if (res.length > 0){
            console.log("Login Success");
            this.usercloud=this.fireStore.collection<User>('User',ref=>ref.where("username","==",this.username)).snapshotChanges().pipe(
              map(actions => {
                return actions.map(a => {
                  const data = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return {id, ...data};
                })
              })
            )
              this.usercloud.subscribe(value =>{
                value.forEach(element => {
                  this.setid(element.id);
                });
              })
              fin = true;
            }
            else{
            console.log("Login failed");
            this.fail();
          }
      //  }
    });

  }

}
