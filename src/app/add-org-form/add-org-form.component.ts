import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrgService } from 'service/org.service';

@Component({
  selector: 'app-add-org-form',
  templateUrl: './add-org-form.component.html',
  styleUrls: ['./add-org-form.component.css']
})
export class AddOrgFormComponent implements OnInit {
  constructor(public orgService: OrgService) {}
  enteredTitle = "";
  enteredContent = "";

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.orgService.addPosts(form.value.name, form.value.description, form.value.picture);
    form.resetForm();
  }
  ngOnInit(){

  }
}
