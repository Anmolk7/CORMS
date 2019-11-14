import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(form.value.password!=form.value.confirmPassword){
      console.log("Passwords do not match")
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
  }
}
