import { Post } from "../posts/post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" }) //uses same instance where ever it is injected
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    //return [...this.posts];
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/posts")
      .pipe(
        map(postData => {
          //return id as _id
          return postData.posts.map(post => {
            return {
              name: post.name,
              description: post.description,
              picture: post.picture,
              id: post._id
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPosts(name: string, description: string, picture: string) {
    const post: Post = {
      id: null,
      name: name,
      description: description,
      picture: picture
    };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(
          "response Data " + responseData.message + JSON.stringify(post)
        );
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });
  }

  getPostId(id: string) {
    return { ...this.posts.find(p => p.id === id) };
  }
  deletePost(postId: string) {
    this.http
      .delete("http://localhost:3000/api/posts/" + postId)
      .subscribe(() => {
        console.log("Deleted!");
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }
  updatePost(id: string, name: string, description: string, picture: string) {
    const post: Post = {
      id: id,
      name: name,
      description: description,
      picture: picture
    };
    this.http
      .put("http://localhost:3000/api/posts/" + post.id, post)
      .subscribe(response => console.log(response));
  }
}
