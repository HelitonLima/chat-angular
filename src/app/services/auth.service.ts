import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fire: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  login(email: string, pass: string){
    return this.auth.signInWithEmailAndPassword(email, pass)
  }
}
