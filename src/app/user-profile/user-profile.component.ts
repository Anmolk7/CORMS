import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Roster } from '../posts/roster.model';
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';

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
  private rosterSub: Subscription;
  
  constructor(private http: HttpClient, public authService: AuthService, public postService:PostService){}

  ngOnInit(){
    this.imagepath="../../assets/image/"+this.authService.getUserId()+'.'+'jpeg'
    this.username=this.authService.getUsername();

    this.rosterSub= this.postService.getRosterUpdateListener()
    .subscribe((rosters:Roster[])=>{
      this.rosters=rosters;
      console.log("Rosters: "+JSON.stringify(this.rosters));
    });
    //console.log(this.imagepath);
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>("http://localhost:3000/api/user/image", formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
