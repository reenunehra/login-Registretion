import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm, Validator, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  isSubmitted: boolean;
  loginData:any[]
  
  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService ) { } 

  ngOnInit(): void {
   
    this.initialiseLoginForm();
  }
   initialiseLoginForm(){
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  
  submitForm(){
    console.log("check if form is valid",this.loginForm.valid);
    console.log("", this.loginForm);

    if(this.loginForm.valid){

    this.serviceService.getData('/api/hash/login',this.loginForm.value).subscribe(
       (res)=>{
        console.log("response",res)             
       },
       (err)=>{
        console.log(err)
       }
    )
    }
    else{
      alert("Invalid Data");
    }
  }  
}


