import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OrgCard } from "../src/app/model/org-card.post";
import { Subject } from "rxjs";


@Injectable({ providedIn: "root" })
export class OrgService {
  private orgCards: OrgCard[] = [];
  private orgCardsUpdated = new Subject<OrgCard[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    //return [...this.posts];
    this.http
      .get<{orgCards: OrgCard[] }>(
        "http://localhost:3000/api/orgcards"
      )
      .subscribe(orgCardsData => {
        this.orgCards = orgCardsData.orgCards;
        this.orgCardsUpdated.next([...this.orgCards]);
      });
  }
  getPostUpdateListener() {
    return this.orgCardsUpdated.asObservable();
  }
  addPosts(name: string, descripton: string, picture: string) {
    const orgCard: OrgCard = {
      id: null,
      name: name,
      description: descripton,
      picture:picture
    };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/orgcards", orgCard)
      .subscribe(responseData => {
        console.log("response Data " + responseData.message);
        this.orgCards.push(orgCard);
        this.orgCardsUpdated.next([...this.orgCards]);
      });
  }
}
