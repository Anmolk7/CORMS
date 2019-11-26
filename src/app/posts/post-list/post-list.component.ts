import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostService } from "../../service/post.service";
import { AuthService } from 'src/app/auth/auth.service';
import { Roster } from '../roster.model';
import { MatButton } from '@angular/material';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  rosters: Roster[];
  private postsSub: Subscription;
  private authStatus: Subscription;
  userIsAuthenticated = false;
  userId: string;
  username: string;
  duplicateRoster: Roster;
 
  ngOnInit() {
    this.postService.getPosts();
    console.log(this.rosters);
    this.userId = this.authService.getUserId();
    this.username = this.authService.getUsername();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userId = this.authService.getUserId();

    this.authStatus = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }
  onDelete(postId: string) {
    this.postService.deletePost(postId);
  }


  onJoin(organization: string, joinButton: MatButton) {
    console.log(joinButton._elementRef.nativeElement);

    this.postService.getAllMembers().subscribe(roster => {
      this.rosters = roster
      this.duplicateRoster = this.rosters.find((e: Roster) => e.username === this.username && e.organization === organization)
      console.log(this.duplicateRoster);
      if (this.duplicateRoster) {
        alert('You have already sent a request to join ' + organization + " club")
      }
      else {
        alert('Request sent to join ' + organization + " club")
        this.postService.joinOrg(this.username, organization)
      }
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  constructor(public postService: PostService, public authService: AuthService) { }
}
