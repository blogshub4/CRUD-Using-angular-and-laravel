import { Component, OnInit } from '@angular/core';
//import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn:boolean = false;
  // constructor(private Token:TokenService,private Auth:AuthService, private router:Router) { }
  constructor(private Auth:AuthService, private router:Router) { }
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(
      value=>{
        this.loggedIn = value;
      }
    );
  }
  
  logout(event:MouseEvent){
    event.preventDefault();
    //this.Token.remove();
    //console.log("Logout");
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }

}
