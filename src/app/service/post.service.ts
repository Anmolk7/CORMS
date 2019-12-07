import { Post } from "../posts/post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Roster } from '../posts/roster.model';
import { President } from '../posts/president.model';
import { CurrMem } from '../posts/currMem.model';
const DEV_PATH = "http://localhost:3000";
const PROD_PATH = "https://corms-260220.appspot.com";

@Injectable({ providedIn: "root" }) //uses same instance where ever it is injected
export class PostService {
  private posts: Post[] = [];
  private roster: Roster[] = [];
  private president: President[] = [];
  private currMem: CurrMem[]=[];
  private postUpdated = new Subject<Post[]>();
  private rosterUpdated = new Subject<Roster[]>();
  private presidentUpdated = new Subject<President[]>();
  private currMemUpdated = new Subject<CurrMem[]>();
  constructor(private http: HttpClient) { }


  getPosts() {
    //return [...this.posts];
    this.http
      .get<{ message: string; posts: any }>(DEV_PATH + "/api/posts")
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
  getMembers() {
    this.http
      .get<{ message: string; rosters: any }>(DEV_PATH + "/api/join")
      .pipe(
        map(memberData => {
          //return id as _id
          return memberData.rosters.map(roster => {
            return {
              username: roster.username,
              organization: roster.organization
            };
          });
        })
      )
      .subscribe(transformedRosters => {
        this.roster = transformedRosters;
        this.rosterUpdated.next([...this.roster]);
      });

  }
  getRosterUpdateListener() {
    return this.rosterUpdated.asObservable();
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  getCurrentMemberListener(){
    return this.currMemUpdated.asObservable();
  }

  getAllMembers() {
    return this.http
      .get<{ rosters: any }>(DEV_PATH + "/api/join")
      .pipe(
        map(memberData => {
          //return id as _id
          return memberData.rosters.map(roster => {
            return {
              username: roster.username,
              organization: roster.organization
            };
          });
        })
      )

  }
  
  getCurrentMembers() {
    // return this.http
    // .get<{ currMems: any }>(DEV_PATH + "/api/addmem")
    // .pipe(
    //   map(memberData => {
    //     //return id as _id
    //     return memberData.currMems.map(currMem => {
    //       return {
    //         username: currMem.username,
    //         organization: currMem.organization
    //       };
    //     });
    //   })
   // )
    this.http
      .get<{ message: string; currMems: any }>(DEV_PATH + "/api/addmember")
      .pipe(
        map(memberData => {
          //return id as _id
          return memberData.currMems.map(currMem => {
            return {
              username: currMem.username,
              organization: currMem.organization
            };
          });
        })
      )
      .subscribe(transformedCurrMem => {
        this.currMem = transformedCurrMem;
        this.currMemUpdated.next([...this.currMem]);
      });

  }
  getPost(id: string) {
    return this.http.get<{ _id: string, name: string, description: string, picture: string, creator: string }>(DEV_PATH + "/api/posts/" + id);
  }
  joinOrg(username: string, organization: string) {
    const roster: Roster = {
      id: null,
      username: username,
      organization: organization
    }
    this.http.post<{ message: string }>(DEV_PATH + "/api/join", roster).subscribe(responseData => {
      console.log(
        "response Data " + responseData.message + JSON.stringify(roster)
      );
      this.roster.push(roster);
      this.rosterUpdated.next([...this.roster]);
    });
  }
  getAllPresidents() {
    return this.http
    .get<{ presidents: any }>(DEV_PATH + "/api/makepres")
    .pipe(
      map(memberData => {
        //return id as _id
        return memberData.presidents.map(president => {
          return {
            username: president.username,
            organization: president.organization
          };
        });
      })
    )
  }
  updatePost(id: string, name: string, description: string, picture: string) {
    const post: Post = {
      id: id,
      name: name,
      description: description,
      picture: picture,
      creator: null
    };
    this.http
      .put(DEV_PATH + "/api/posts/" + post.id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }
  updatePresident( id:string,username: string, organization: string) {
    const president: President = {
      id: id,
      username:username,
      organization:organization
    };
    this.http
      .patch(DEV_PATH + "/api/makepres/" + president.id, president)
       .subscribe(response => {
      //   const updatedPresidents = [...this.president];
      //   const oldPostIndex = updatedPresidents.findIndex(p => p.username === president.username);
      //   updatedPresidents[oldPostIndex] = president;
      //   this.president = updatedPresidents;
      //   this.presidentUpdated.next([...this.president]);
        console.log(response);
          
      });
  }
  makePresident(username: string, organization: string) {
    const president: President = {
      id: null,
      username: username,
      organization: organization
    }
    this.http.post<{ message: string }>(DEV_PATH + "/api/makepres", president).subscribe(responseData => {
      console.log(
        "response Data " + responseData.message + JSON.stringify(president)
      );
      this.president.push(president);
      this.presidentUpdated.next([...this.president]);
    });
  }
  addMember(username: string, organization: string) {
    const currMem: CurrMem = {
      id: null,
      username: username,
      organization: organization
    }
    this.http.post<{ message: string }>(DEV_PATH + "/api/addmember", currMem).subscribe(responseData => {
      console.log(
        "response Data " + responseData.message + JSON.stringify(currMem)
      );
      this.currMem.push(currMem);
      this.currMemUpdated.next([...this.currMem]);
    });
  }
  moveFromRequestToCurrent(username: string, organization:string){
    this.http
    .delete(DEV_PATH + "/api/join/" + username)
    .subscribe(response => {
      console.log(response);
      const updatedRoster = this.roster.filter(roster => roster.username !== username);
      this.roster = updatedRoster;
      this.rosterUpdated.next([...this.roster]);
    });
    this.addMember(username,organization);
  }
  deletePresident(username: string) {
    this.http
      .delete(DEV_PATH + "/api/makepres/" + username)
      .subscribe(() => {
        console.log("Deleted!");
        const updatedPresidents = this.president.filter(president => president.id !== username);
        this.president = updatedPresidents;
        this.presidentUpdated.next([...this.president]);
      });
  }

  
  addPosts(name: string, description: string, picture: string) {
    const post: Post = {
      id: null,
      name: name,
      description: description,
      picture: picture,
      creator: null
    };
    this.http
      .post<{ message: string }>(DEV_PATH + "/api/posts", post)
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
      .delete(DEV_PATH + "/api/posts/" + postId)
      .subscribe(() => {
        console.log("Deleted!");
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }



}
