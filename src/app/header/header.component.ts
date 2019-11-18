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
  constructor(public router: Router, private authService:AuthService) {}
  ngOnInit(){
    this.userId=this.authService.getUserId();
    this.username=this.authService.getUsername();
    console.log("header userId: "+this.userId)
    this.userIsAuthenticated=this.authService.getIsAuth();
    this.authListenerSubs=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
      this.userId=this.authService.getUserId();
    })
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
  logout(){
    this.authService.logout();
  }

}
