import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Post } from "../post.model";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  private mode = "create";
  private postId: string;
  post: Post;
  duration=2;
  constructor(
    public postService: PostService,
    public activeRoute: ActivatedRoute,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        //extract postId from current URL
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.post = this.postService.getPostId(this.postId);
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
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