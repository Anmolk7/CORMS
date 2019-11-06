import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: "root" }) //uses same instance where ever it is injected
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    //return [...this.posts];
    this.http
      .get<{ message: string; posts: Post[] }>(
        "http://localhost:3000/api/posts"
      )
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
      });
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPosts(name: string, description: string, picture: string) {
    const post: Post = { id: null, name: name, description:description, picture:picture };
    this.http.post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe((responseData) =>{
        console.log("response Data "+responseData.message + JSON.stringify(post));
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });

  }
}
