import { Component, OnInit, OnDestroy } from "@angular/core";
import { OrgCard } from "../model/org-card.post";
import { Subscription } from "rxjs";
import { OrgService } from "service/org.service";

@Component({
  selector: "app-card-view",
  templateUrl: "./card-view.component.html",
  styleUrls: ["./card-view.component.css"]
})
export class CardViewComponent implements OnInit,OnDestroy {
  // clubs: OrgCard[] = [
  //   {
  //     id:"1",
  //     name: "Chess",
  //     description: "some description",
  //     picture:"https://cdn2.iconfinder.com/data/icons/business-272/64/STRATEGY-512.png"

  //   },
  //   // {
  //   //   id:"2",
  //   //   name: "Math",
  //   //   description: "some description",
  //   //   picture: {
  //   //     url:
  //   //       "https://img.pngio.com/math-symbols-math-png-600_564.png"
  //   //   }
  //   // },
  //   // {
  //   //   id:"3",
  //   //   name: "Science",
  //   //   description: "some description",
  //   //   picture: {
  //   //     url:
  //   //       "https://img.pngio.com/science-free-png-image-png-arts-free-science-png-images-512_512.png"
  //   //   }
  //   // },
  //   // {
  //   //   id:"4",
  //   //   name: "Music",
  //   //   description: "some description",
  //   //   picture: {
  //   //     url:
  //   //       "https://www.jing.fm/clipimg/full/18-182609_marching-band-png-band-clipart.png"
  //   //   }
  //   // },
  //   // {
  //   //   id:"5",
  //   //   name: "Art",
  //   //   description: "some description",
  //   //   picture: {
  //   //     url:
  //   //       "https://img.pngio.com/artwork-png-transparent-artworkpng-images-pluspng-artworkpng-1024_768.png"
  //   //   }
  //   // },
  //   // {
  //   //   id:"6",
  //   //   name: "PC Games",
  //   //   description: "some description",
  //   //   picture: {
  //   //     url:
  //   //     "https://www.pngsee.com/uploadpng/detail/22-226489_games-computer-game-icon-free-vector-video-game.png"
  //   //   }
  //   // },
  //   // {
  //   //   id:"7",
  //   //   name: "Environment",
  //   //   description: "some description",
  //   //   picture: {
  //   //     url:
  //   //     "https://www.vippng.com/png/detail/6-63382_oak-leaf-png-clip-art-grape-leaves.png"
  //   //   }
  //   // },
  //   {
  //     id:"8",
  //     name: "JEDI",
  //     description: "some description",
  //     picture:
  //       "https://icons-for-free.com/iconfiles/png/512/jedi+master+starwars+yoda+icon-1320166700243190687.png"
  //   }
  // ];

  orgCards: OrgCard[] = [];
  private orgCardSub: Subscription;

  ngOnInit() {
    this.orgService.getPosts();
    this.orgCardSub = this.orgService
      .getPostUpdateListener()
      .subscribe((orgCards: OrgCard[]) => {
        this.orgCards = orgCards;
     //   console.log("org-cards: "+this.orgCards);
      });
  }
  ngOnDestroy() {
    this.orgCardSub.unsubscribe();
  }

  constructor(public orgService: OrgService) {}
}
