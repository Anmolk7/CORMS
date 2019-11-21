import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy{
  userIsAuthenticated=false;
  userId:string;
  private authListenerSubs: Subscription;
  username:string;
  user:string
  constructor(public router: Router, private authService:AuthService) {}
  ngOnInit(){
    
  

    this.userIsAuthenticated=this.authService.getIsAuth();
    this.authListenerSubs=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
      this.userId=this.authService.getUserId();
      
      this.username=this.authService.getUsername();
      if(this.username){
      this.user=this.username.split('@')[0].toUpperCase();
      }
      console.log("user: "+this.userId+" "+this.username)
    })
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
  logout(){
    this.authService.logout();
  }

}
