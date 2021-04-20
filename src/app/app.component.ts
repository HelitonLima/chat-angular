import { AngularFirestore } from '@angular/fire/firestore'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-angular';
  message: any

  constructor(
    private fire: AngularFirestore
  ) {

    this.fodase()
  }

  fodase(){
    this.message =  this.fire.collection('message').valueChanges()
  }

}
