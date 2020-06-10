import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

import { LibraryComponentsComponent } from "./placeholder/library-components/library-components.component";
import { LibraryHelpersComponent } from "./placeholder/library-helpers/library-helpers.component";
import { LibraryGlobalsComponent } from "./placeholder/library-globals/library-globals.component";
import { LibraryLoginComponent } from "./placeholder/library-login/library-login.component";
import { AuthGuard } from "./core/auth.guard";
import { UserResolver } from "./core/user.resolver";

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  // ...any other options you'd like to use
};

const routes: Routes = [
  {
    path: "",
    component: LibraryGlobalsComponent,
    resolve: { data: UserResolver },
  },
  {
    path: "reference",
    component: LibraryHelpersComponent,
    resolve: { data: UserResolver },
  },
  {
    path: "components",
    component: LibraryComponentsComponent,
    resolve: { data: UserResolver },
  },
  {
    path: "*",
    component: LibraryGlobalsComponent,
    resolve: { data: UserResolver },
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LibraryLoginComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
