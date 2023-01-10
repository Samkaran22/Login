import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title='loginform';
  login= new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.maxLength(6)]),
  });
  Getdata(){
    console.log(this.login.value)
  }
  get vname(){
    return this.login.get("name")
  }
  get vemail(){
    return this.login.get("email")
  }
  get vpwd(){
    return this.login.get('password')
  }
}
