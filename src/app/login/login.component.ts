import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._authService.login(this.email, this.password).then(resp => {
      console.log('login success: ', resp);
      this._router.navigate(['todolist']);
    }).catch(err => {
      console.log('login err: ', err);
    });
  }
}
