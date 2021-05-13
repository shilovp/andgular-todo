import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  private authState: Observable<any>;
  isAuthorized = false;
  userData: any;

  email: string = '';
  password: string = '';


  constructor(public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.user = afAuth.authState;
    this.authState = this.afAuth.authState;

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', '');
      }
    })
  }

  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut().then(resp => {
      this.user = null;
      this.router.navigate(['login']);
    })
  }


  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
}