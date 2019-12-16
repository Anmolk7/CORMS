import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Roster } from '../posts/roster.model';
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';
import { CurrMem } from '../posts/currMem.model';
import { President } from '../posts/president.model';
// const fs = require("fs");
const DEV_PATH = "http://localhost:3000";
const PROD_PATH = "https://corms-260220.appspot.com";
const IMAGE_PATH = "";


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
  userId: string = "";
  currentMembers: CurrMem[] = [];
  currMemSub: Subscription;
  presidentSub: Subscription;
  presidents: President[]=[];

  constructor(private http: HttpClient, public authService: AuthService, public postService: PostService) { }
  ngOnInit() {
    this.imagepath = "../../assets/image/micheal_scott.jpeg"
    console.log(this.imagepath);
    this.username = this.authService.getUsername();
    this.userId = this.authService.getUserId();
    this.postService.getCurrentMembers();
    this.currMemSub = this.postService.getCurrentMemberListener().subscribe((currMem: CurrMem[]) => {
      this.currentMembers = currMem;
      this.clubs = this.currentMembers.filter(currMem => currMem.username === this.username);
    });
    this.postService.getPresidents();
    this.presidentSub = this.postService.getPresidentUpdateListener().subscribe((president: President[]) => {
      this.presidents = president;
      this.presidents = this.presidents.filter(president => president.username === this.username);
    });
  }

  onUnsubscribe(organization: string) {
    this.postService.deleteCurrent(this.username, organization)
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  onLeave(organization:string){
    this.postService.deletePresident(this.username,organization)
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>(DEV_PATH + "/api/user/image", formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
