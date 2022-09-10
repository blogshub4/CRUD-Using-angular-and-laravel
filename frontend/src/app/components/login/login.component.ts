import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
//import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean | undefined;
  public form = {
    email:null,
    password:null
  }
  
  // constructor(private backend:BackendService, private token:TokenService, private router:Router,private Auth:AuthService) {
    constructor(private backend:BackendService,private router:Router,private Auth:AuthService) {
    console.log("=="+this.loggedIn);
   }

  public error = [];
  ngOnInit(): void {
  }

  Login(){
    return this.backend.login(this.form).subscribe(
      // data=>console.log(data),
      data=>this.handleResponse(data),
       error=>this.handleError(error)
     );
  }

  handleResponse(data:any){
    console.log(data);
    // this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl("/profile");
  }

  handleError(error:any){
    this.error = error.error.error;
  }

}
