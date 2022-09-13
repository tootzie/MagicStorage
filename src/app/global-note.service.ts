import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalNoteService {
  increment = 0;
  id_subject : string;
  isiImg = [
    'assets/img/card1.jpg',
    'assets/img/card2.jpg',
    'assets/img/card3.jpg',
    'assets/img/card4.jpg',
    'assets/img/card5.jpg'
  ]
  public loginid :any = "";

  constructor() { }

  getIncrement(){
    return this.increment;
  }

  riseIncrement(){
    this.increment += 1;
  }

  setIdSub(id){
    this.id_subject = id;
  }

  getIdSub(){
    return this.id_subject;
  }
  getloginid(){
    return this.loginid;
  }
  setloginid(id){
    this.loginid = id;
  }
}
