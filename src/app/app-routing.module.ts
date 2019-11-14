import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { OrgProfileComponent } from './org-profile/org-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: "", redirectTo: "/orglist", pathMatch: "full" },
  { path: "orgcreate", component: PostCreateComponent , canActivate:[AuthGuard]},
  { path: "orglist", component: PostListComponent },
  { path: "orgprofile", component: OrgProfileComponent },
  { path: "orgedit/:postId", component: PostCreateComponent, canActivate:[AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
