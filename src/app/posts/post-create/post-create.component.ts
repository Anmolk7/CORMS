import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../../service/post.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Post } from "../post.model";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Roster } from '../roster.model';
import { President } from '../president.model';
import { CurrMem } from '../currMem.model';


@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  private mode = "create";
  private postId: string;
  post: Post = { id: null, name: "", description: "", picture: "", creator: "" };
  duration = 2;
  private authStatus: Subscription;
  private rosterSub: Subscription;
  private currMemSub: Subscription;
  rosters: Roster[] = [];
  currentPresident: President;
  presidents: President[] = [];
  username: string = "";
  userIsAuthenticated = false;
  currentMembers: CurrMem[] = [];
  requestingMembers: Roster[];
  duplicatePresident: President;
  constructor(
    public postService: PostService,
    public activeRoute: ActivatedRoute,
    public router: Router,
    public snackBar: MatSnackBar,
    public authService: AuthService
  ) { }


  ngOnInit() {
    this.username = this.authService.getUsername();
    this.postService.getAllPresidents().subscribe(president => {
      this.presidents = president
      console.log("president "+JSON.stringify(this.presidents))
    });
    
    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        //extract postId from current URL
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.postService.getPost(this.postId).subscribe(postData => {
          this.post = { id: postData._id, name: postData.name, description: postData.description, picture: postData.picture, creator: postData.creator }
        });
      } else {
        this.mode = "create";
        this.postId = null;
      
      }
    });

    this.postService.getCurrentMembers();
    this.currMemSub = this.postService.getCurrentMemberListener().subscribe((currMem: CurrMem[]) => {
      this.currentMembers = currMem;
      console.log(this.currentMembers);
    });

    this.postService.getMembers();
    this.rosterSub = this.postService.getRosterUpdateListener()
      .subscribe((rosters: Roster[]) => {
        this.rosters = rosters;
        /// console.log("Rosters: " + JSON.stringify(this.rosters));
      });

    this.userIsAuthenticated = this.authService.getIsAuth();
    // console.log("Authenticated ?" + this.userIsAuthenticated)

    this.authStatus = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    })
    // console.log("Authenticated ?" + this.userIsAuthenticated)
  }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // snackbar pop-up 
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.duration * 1000,
      panelClass: ['snackbar']
    });

    if (this.mode === "create") {
      this.postService.addPosts(
        form.value.name,
        form.value.description,
        form.value.picture
      );
    } else {
      this.postService.updatePost(
        this.postId,
        form.value.name,
        form.value.description,
        form.value.picture
      );
    }
    form.resetForm();
  }
  addMember(username: string, organization: string) {
    // console.log(username+" "+organization);
    this.postService.moveFromRequestToCurrent(username, organization);
  }
  makePresident(username: string, organization: string) {
    this.postService.getAllPresidents().subscribe(president => {
      this.presidents = president
      this.duplicatePresident = this.presidents.find((e: President) => e.organization === organization)
      if (this.duplicatePresident) {
         alert("Updating President to " + username+" for "+organization)
        this.postService.deletePresident(organization);
        this.postService.makePresident(username, organization)
      }
      else {
        alert("Creating President for " + organization);
        this.postService.makePresident(username, organization)
      }
    });

  }
  deletePresidents(username: string) {
    this.postService.deletePresident(username);
  }
  removeCurrent(username: string) {
    this.postService.deleteCurrent(username);
  }
}


@Component({
  selector: 'app-post-create-pop',
  templateUrl: './post-success.html',
  styleUrls: ["./post-create.component.css"]
})
export class PizzaPartyComponent {
  constructor(public router: Router) { }
}