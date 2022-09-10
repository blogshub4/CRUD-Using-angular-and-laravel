import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form={
    name:null,
    email:null,
    password:null,
    cpassword:null
  }
  public error:any=[];
  public msg: any = null;
  constructor(private backend:BackendService) { }

  ngOnInit(): void {
  }

  submitSignup(registrationForm:NgForm){
     return this.backend.signUp(this.form).subscribe(
      // data=>console.log(data),
       data=>this.handleResponse(data,registrationForm),
       error=>this.handleError(error),
     );
   }

   handleResponse(data:any,registrationForm:any){
    if (data.statusCode === 200) {
      registrationForm.resetForm();
      this.msg = 'success';
     // this.router.navigateByUrl("/login"); 
      }
   }
   handleError(error:any){
    this.error = error.error.errors;
   }

}
