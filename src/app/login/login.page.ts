import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginCredential } from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;


  constructor(
    private loginService: LoginService,
    formBulider: FormBuilder,
    private router: Router

  ) {
    this.loginFormGroup = formBulider.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });

   }

  ngOnInit() {
  }

  login() {
    const loginCredentials: LoginCredential = this.loginFormGroup.value;
    this.loginService.login(loginCredentials).then((authData) => {
      console.log(authData);
      this.router.navigate(['/tabs/tab1']);

    }
    ).catch((error) => {
      console.log("Auth Error  =>" , error);
    }
    );


  }

}
