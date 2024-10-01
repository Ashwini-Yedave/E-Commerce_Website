import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    username:'',
    email:'',
    password:''
  };

  loginObj:any={
    username:'',
    password:''
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData !=null){
     this.signupUsers = JSON.parse(localData);
  }
}

  signUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers)); //stroe/send
    this.signupObj={
      username:'',
      email:'',
      password:''
    };
  }
  login(){
   const isUserExist =this.signupUsers.find(m => m.username == this.loginObj.username && m.password== this.loginObj.password);
   if(isUserExist != undefined)
   {
    // alert("user login sucessfully");
    this.router.navigate(['/products']);
   }else{
    alert("wrong creditial");
   }
   
  }

}
