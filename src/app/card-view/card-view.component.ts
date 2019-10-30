import { Component, OnInit } from "@angular/core";
import { OrgCard } from "../model/org-card.post"

@Component({
  selector: "app-card-view",
  templateUrl: "./card-view.component.html",
  styleUrls: ["./card-view.component.css"]
})
export class CardViewComponent implements OnInit {
  clubs: OrgCard[] = [
    {
      name: "Chess",
      description: "some description",
      picture: {
        url:
          "https://cdn2.iconfinder.com/data/icons/business-272/64/STRATEGY-512.png"
      }
    },
    {
      name: "Math",
      description: "some description",
      picture: {
        url:
          "https://img.pngio.com/math-symbols-math-png-600_564.png"
      }
    },
    {
      name: "Science",
      description: "some description",
      picture: {
        url:
          "https://img.pngio.com/science-free-png-image-png-arts-free-science-png-images-512_512.png"
      }
    },
    {
      name: "Music",
      description: "some description",
      picture: {
        url:
          "https://www.jing.fm/clipimg/full/18-182609_marching-band-png-band-clipart.png"
      }
    },
    {
      name: "Art",
      description: "some description",
      picture: {
        url:
          "https://img.pngio.com/artwork-png-transparent-artworkpng-images-pluspng-artworkpng-1024_768.png"
      }
    },
    {
      name: "PC Games",
      description: "some description",
      picture: {
        url:
        "https://www.pngsee.com/uploadpng/detail/22-226489_games-computer-game-icon-free-vector-video-game.png"
      }
    },
    {
      name: "Environment",
      description: "some description",
      picture: {
        url:
        "https://www.vippng.com/png/detail/6-63382_oak-leaf-png-clip-art-grape-leaves.png"
      }
    },
    {
      name: "JEDI",
      description: "some description",
      picture: {
        url:
        "https://icons-for-free.com/iconfiles/png/512/jedi+master+starwars+yoda+icon-1320166700243190687.png"
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
