import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
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


  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.email = email;
        this.password = password;
        setTimeout(() => {
          this.ngZone.run(() => {
            this.router.navigate(['todolist']);
          });
        }, 1);
      }).catch((error) => {
        window.alert(error.message)
      })
  }


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  get uEmail(): string {
    return this.email;
  }

  get uPassword(): string {
    return this.password;
  }
}