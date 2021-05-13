import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this._authService.registerUser(this.email, this.password).then((userCredential) => {
      var user = userCredential.user;
      console.log('registered new user: ', user);

      console.log('whole response: ', userCredential);
    })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

}
