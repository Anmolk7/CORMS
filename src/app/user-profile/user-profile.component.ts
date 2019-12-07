import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Roster } from '../posts/roster.model';
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';
// const fs = require("fs");
const DEV_PATH="http://localhost:3000";
const PROD_PATH="https://corms-260220.appspot.com";
const IMAGE_PATH="";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'fileUpload';
  images;
  multipleImages = [];
  imagepath;
  username;
  rosters: Roster[];
  rosterSub: Subscription;
  clubs: Roster[];
  userId: string="";


  constructor(private http: HttpClient, public authService: AuthService, public postService: PostService) { }

  ngOnInit() {
    // const path = "../../assets/image/" + this.authService.getUserId() + '.' + 'jpeg';
    // if (fs.existsSync(path)) {
      this.imagepath = "./../../../CORMS/CORMS/backend/CORMS/assets/image/" + this.authService.getUserId() + '.' + 'jpeg'
    //}
    console.log(this.imagepath);
    this.username = this.authService.getUsername();
    this.userId=this.authService.getUserId();
    this.postService.getMembers();
    this.rosterSub = this.postService.getRosterUpdateListener()
      .subscribe((rosters: Roster[]) => {
        this.rosters = rosters;
        this.clubs = this.rosters.filter(roster => roster.username === this.username);
        console.log(this.clubs);
      });

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }


  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>(DEV_PATH+"/api/user/image", formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
