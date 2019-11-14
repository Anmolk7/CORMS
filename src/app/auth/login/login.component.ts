import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(router: Router, public authservice:AuthService) { }

  ngOnInit() {}
  
  onLogin(form : NgForm){
  if(form.invalid){
    return
  }
  this.authservice.login(form.value.email, form.value.password);
  
  //console.log(form.value.email+" "+form.value.password)
  }
}
