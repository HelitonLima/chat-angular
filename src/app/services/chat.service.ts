import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MessageInterface {
  $key?: string,
  email?: string,
  message?: string,
  username?: Observable<string>,
  timeSent?: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any
  chatMessages: Observable<MessageInterface[]>
  chatMessage: MessageInterface
  username: Observable<string>

  constructor(
    private fire: AngularFirestore,
    private auth: AngularFireAuth
  ) { 
    this.auth.authState.subscribe(auth => {
      if(auth){
        this.user = auth
      }
    })
   }

  async sendMessage(message: string){
    const timestamp = this.getTimestamp()
    const email = this.user.email
    this.chatMessages = this.getMessages()
    await this.fire.collection('Message').doc().set({
      message,
      timeSent: timestamp,
      username: 'this.username',
      email
    })
  }

  getMessages() {
    return this.fire.collection('Message', ref => ref.orderBy('timeSent').limitToLast(30)).valueChanges()
  }

  getTimestamp(): string{
    const now = new Date()
    const date = now.getFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getDay()
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds() 
    return date + ' ' + time
  }
}
