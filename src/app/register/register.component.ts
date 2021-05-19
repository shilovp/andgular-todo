import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this._authService.registerUser(this.email, this.password).then((userCredential) => {
      this._router.navigate(['todolist']);
    })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // can be used for error handling here
      });
  }

}
