import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostService } from "../../service/post.service";
import { AuthService } from 'src/app/auth/auth.service';
import { Roster } from '../roster.model';
import { MatButton } from '@angular/material';
import { CurrMem } from '../currMem.model';
import { President } from '../president.model';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  rosters: Roster[];
  currMems: CurrMem[];
  rostersPopup: Roster[];
  private postsSub: Subscription;
  private authStatus: Subscription;
  userIsAuthenticated = false;
  userId: string;
  username: string;
  duplicateRoster: Roster;
  presidents: President[];
  alreadyPresident: President;
  alreadyMember:CurrMem;
  requestCount: number = 0;
  rosterLength: number = 0;
  popup: boolean = false;

  popUp(org: string, event) {
    // console.log(event);
    //  console.log(org);
    this.popup = true;
    this.postService.getAllMembers().subscribe(rosters => {
      this.rostersPopup = rosters.filter(rosters => rosters.organization === org)
      this.rosterLength = this.rostersPopup.length;
      // console.log(this.rostersPopup);
    })
  }

  ngOnInit() {
    this.postService.getPosts();
    //  this.popUp();

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
   
    this.postService.getAllMembers().subscribe(roster => {
      this.rosters = roster
      this.duplicateRoster = this.rosters.find((e: Roster) => e.username === this.username && e.organization === organization)
       console.log(this.duplicateRoster);
      this.postService.getAllCurrentMembers().subscribe(currMem=>{
        this.currMems=currMem
        this.alreadyMember=this.currMems.find((e:CurrMem)=>e.username===this.username && e.organization===organization)
        console.log(this.alreadyMember+" "+this.duplicateRoster);
        this.postService.getAllPresidents().subscribe(president=>{
          this.presidents=president;
          this.alreadyPresident=this.presidents.find(((e:President)=>e.username===this.username && e.organization===organization))

      
        if (!this.duplicateRoster && !this.alreadyMember && !this.alreadyPresident) {
          alert('Request sent to join ' + organization + " club")
          this.postService.joinOrg(this.username, organization)
        }
      if(this.duplicateRoster){
        alert('You have already sent a request to join ' + organization + " club")
      }
      if(this.alreadyMember){
        alert("You are already a member of "+organization+" club");
      }
      
      if(this.alreadyPresident){
        alert("You are the President of "+organization+" club");
      }
      })
      })
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  constructor(public postService: PostService, public authService: AuthService) { }
}
