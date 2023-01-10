import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router : Router) { }

  //login
  login(email : string,password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () =>{
      localStorage.setItem('token','true');
    }, err => {
       alert(err.message)
       this.router.navigate(['/']);
    })
  }
   //singnup
   signup(email : string,password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
    alert('Registration Successful')
    this.router.navigate(['/']);
    }, err =>{
       alert(err.message);
       this.router.navigate(['/signup'])
    })
   }  

   //logout
   logout(){
    this.fireauth.signOut().then( () =>{
     localStorage.removeItem('token');
     this.router.navigate(['/']);
    }, err =>{
       alert(err.message);
    })
   }
}



