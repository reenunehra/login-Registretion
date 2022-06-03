import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ServiceService } from '../services/service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: any;
  postData: any = {};

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService ) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      name: [''],
      email: [''],
      password:['']
    });
  }


  signupForm(form : NgForm){
    let data = form.value
    console.log("form",form)
    console.log("All data",data);

    let userData= {  
      name: data.name,   
      email: data.email,
      password: data.password
  }
  this.serviceService.postData('/api/hash/signup', userData).subscribe(

    (res:any)=>{
      console.log(res);
      if(res.success === true){

        this.ResetForm(form)
      }
    },
    (err: any)=>{
      console.log(err);
    }
  )
  };

  ResetForm(form : any){
    form.reset();
    form.submitted = false
    }
}
