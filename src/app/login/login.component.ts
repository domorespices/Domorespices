import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginVO } from './login-vo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  loginInfo = new LoginVO();
  isSubmitted  =  false;
  valid = false;
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      emailLogin: ['', Validators.required],
      passwordLogin: ['', Validators.required]
  });
  }

  login() {
   this.isSubmitted = true;
   if (this.loginInfo.password.localeCompare('wrong') === 0) {
      this.valid = true;
    }
   if (this.loginForm.valid) {
      console.log(this.loginInfo);
    }
  }

}
