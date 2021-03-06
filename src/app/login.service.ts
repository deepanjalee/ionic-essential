import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginCredential } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  login(credentials: LoginCredential) :Promise<any>{
    return this.angularFireAuth
    .signInWithEmailAndPassword(credentials.email, credentials.password);

  }

}
