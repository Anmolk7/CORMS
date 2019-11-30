import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../../service/post.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Post } from "../post.model";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Roster } from '../roster.model';


@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  private mode = "create";
  private postId: string;
  post: Post={id:null, name:"name", description:"des",picture:"pic", creator:"creator"};
  duration=2;
  private authStatus: Subscription;
  private rosterSub: Subscription;
  rosters: Roster[]=[];
  userIsAuthenticated=false;
  currentMembers: Roster[];
  requestingMembers: Roster[];
  constructor(
    public postService: PostService,
    public activeRoute: ActivatedRoute,
    public router: Router,
    public snackBar: MatSnackBar,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        //extract postId from current URL
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.postService.getPost(this.postId).subscribe(postData=>{
            this.post={id:postData._id, name:postData.name, description:postData.description, picture:postData.picture, creator:postData.creator }
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
    this.postService.getMembers();
    this.rosterSub= this.postService.getRosterUpdateListener()
    .subscribe((rosters:Roster[])=>{
      this.rosters=rosters;
     console.log("Rosters: "+JSON.stringify(this.rosters));
    });
   
    this.userIsAuthenticated=this.authService.getIsAuth();
    console.log("Authenticated ?"+this.userIsAuthenticated)

    this.authStatus=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated
    })
    console.log("Authenticated ?"+this.userIsAuthenticated)
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
}

@Component({
  selector: 'app-post-create-pop',
  templateUrl: './post-success.html',
  styleUrls: ["./post-create.component.css"]
})
export class PizzaPartyComponent {
  constructor(public router:Router){}
}