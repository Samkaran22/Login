import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email : string = '';
password : string = '';
constructor(private auth : AuthService){}
title='loginform';
login= new FormGroup({
  name: new FormControl("",Validators.required),
  password:new FormControl("",[Validators.required,Validators.maxLength(6)]),
});
Getdata(){
  console.log(this.login.value)
}
get vname(){
  return this.login.get("name")
}
get vpassword(){
  return this.login.get("password")
}

}
