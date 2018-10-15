import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from "@angular/forms"
import {Service} from "../../core/services/service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  constructor(public data: Service, private router: Router, private fb: FormBuilder ) { }

  loginData;
  userName_loginData;
  pwd_loginData;
  error:boolean = false;

  // loginForm = new FormGroup({
  //   UserName: new FormControl(''),
  //   Password: new FormControl(''),
  // });

  loginForm = this.fb.group({
    UserName: [''],
    Password: [''],
  });


  ngOnInit() {
    let selfthis = this;
    this.data.getLoginData().subscribe(function (dataFromJson){
      console.log(dataFromJson);
      selfthis.loginData = dataFromJson;
    });
    setTimeout(() => {
      console.log("Timeout ", this.loginData);
    }, 1000);
    console.log(this.loginData);

  }

  
  

  onSubmit(userName, password){
    console.log(this.loginForm.value);
    console.log(userName);
    console.log(password);

    for(var i=0; i< this.loginData.length; i++){
      console.log(this.loginData[i].uname);
      console.log(this.loginData[i].pwd);
      // this.userName_loginData = this.loginData[i].uname;
      // this.pwd_loginData = this.loginData[i].pwd;
      
      


      if(userName==this.loginData[i].uname && password == this.loginData[i].pwd){
        console.log("Yes");
        this.error = true;
          this.router.navigate(['/customers']);
          break;
      }
    }
    
  }

}
