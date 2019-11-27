import { Post } from "../posts/post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Roster } from '../posts/roster.model';
const DEV_PATH="http://localhost:3000";
const PROD_PATH="https://corms-260220.appspot.com";

@Injectable({ providedIn: "root" }) //uses same instance where ever it is injected
export class PostService {
  private posts: Post[] = [];
  private roster: Roster[]=[];
  private postUpdated = new Subject<Post[]>();
  private rosterUpdated = new Subject<Roster[]>();
  constructor(private http: HttpClient) {}
 

  getPosts() {
    //return [...this.posts];
    this.http
      .get<{ message: string; posts: any }>(DEV_PATH+"/api/posts")
      .pipe(
        map(postData => {
          //return id as _id
          return postData.posts.map(post => {
            return {
              name: post.name,
              description: post.description,
              picture: post.picture,
              id: post._id,
              creator: post.creator
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }
  getMembers(){
    this.http
    .get<{ message: string; rosters: any }>(DEV_PATH+"/api/join")
    .pipe(
      map(memberData => {
        //return id as _id
        return memberData.rosters.map(roster => {
          return {
            username: roster.username,
            organization:roster.organization
          };
        });
      })
    )
    .subscribe(transformedRosters => {
      this.roster = transformedRosters;
      this.rosterUpdated.next([...this.roster]);
   });

  }
  getRosterUpdateListener(){
    return this.rosterUpdated.asObservable();
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  getAllMembers(){
    return this.http
    .get<{rosters: any }>(DEV_PATH+"/api/join")
    .pipe(
      map(memberData => {
        //return id as _id
        return memberData.rosters.map(roster => {
          return {
            username: roster.username,
            organization:roster.organization
          };
        });
      })
    )
  
  }

  getPost(id:string){
    return this.http.get<{_id:string, name:string, description:string, picture:string, creator:string}>(DEV_PATH+"/api/posts/"+id);
  }
  joinOrg(username:string, organization:string){
    const roster: Roster={
      id:null,
      username:username,
      organization:organization
    }
    this.http.post<{message:string}>(DEV_PATH+"/api/join",roster)  .subscribe(responseData => {
      console.log(
        "response Data " + responseData.message + JSON.stringify(roster)
      );
      this.roster.push(roster);
      this.rosterUpdated.next([...this.roster]);
    });
  }

  addPosts(name: string, description: string, picture: string) {
    const post: Post = {
      id: null,
      name: name,
      description: description,
      picture: picture,
      creator:null
    };
    this.http
      .post<{ message: string }>(DEV_PATH+"/api/posts", post)
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
      .delete(DEV_PATH+"/api/posts/" + postId)
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
      picture: picture,
      creator:null
    };
    this.http
      .put(DEV_PATH+"/api/posts/" + post.id, post)
      .subscribe(response => {
        const updatedPosts=[...this.posts];
        const oldPostIndex=updatedPosts.findIndex(p=>p.id===post.id);
        updatedPosts[oldPostIndex]=post;
        this.posts=updatedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }

  
}
