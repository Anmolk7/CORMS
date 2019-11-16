import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostService } from "../../service/post.service";
import { AuthService } from 'src/app/auth/auth.service';
import { Roster } from '../roster.model';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  posts: Post[] = [];
  rosters: Roster[]=[];
  private postsSub: Subscription;

  private authStatus: Subscription;
  userIsAuthenticated=false;
  userId:string;
  username:string;



  ngOnInit() {
    this.postService.getPosts();
  
    this.userId=this.authService.getUserId();
    this.username=this.authService.getUsername();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
       // console.log("posts "+this.posts);
      });
      this.userIsAuthenticated=this.authService.getIsAuth();
      this.userId=this.authService.getUserId();
      console.log("userId: "+this.userId)
   
     
     // console.log("Authenticated ?"+this.userIsAuthenticated)

      this.authStatus=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
        this.userIsAuthenticated=isAuthenticated;
        //this.userId=this.authService.getUserId();
     
      })
      //console.log("Authenticated ?"+this.userIsAuthenticated)
  }
  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }
  onJoin(organization:string){
  alert('Requested!')
   this.postService.joinOrg(this.username,organization);
   // console.log(organization)
 
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  constructor(public postService: PostService, public authService:AuthService) {}
}
