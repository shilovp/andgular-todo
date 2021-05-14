import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string | null = "";
  password: string | null = "";
  isAuthorized = false;


  constructor(public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.email = user.email;
        this.isAuthorized = true;
      } else {
        this.isAuthorized = false;
      }
    })
  }

  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut().then(resp => {
      this.isAuthorized = false;
      this.router.navigate(['login']);
    })
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  getUsername() {
    return this.email;
  }

  isUserAuthenticated() {
    return this.isAuthorized;
  }
}