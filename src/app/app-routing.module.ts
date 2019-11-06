import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { OrgProfileComponent } from './org-profile/org-profile.component';

const appRoutes: Routes = [
  { path:"", redirectTo:"/orglist", pathMatch:"full"},
  { path: "orgcreate", component: PostCreateComponent },
  { path: "orglist", component: PostListComponent },
  { path:"orgprofile", component: OrgProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
