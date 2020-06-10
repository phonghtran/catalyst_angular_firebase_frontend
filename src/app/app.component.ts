import { Component, OnInit } from "@angular/core";
import { AuthService } from "./core/auth.service";
import { UserService } from "./core/user.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public userService: UserService,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      // see also
      let changeStatus = val instanceof NavigationEnd;

      if (changeStatus === true) {
        this.checkStatus();
      }
    });
  }

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.checkStatus();
  }

  checkStatus() {
    this.userService.getCurrentUser().then(
      (res) => {
        this.isLoggedIn = true;
      },
      (error) => {
        this.isLoggedIn = false;
      }
    );
  }

  logout() {
    this.authService.doLogout().then(
      (res) => {
        this.router.navigate(["/login/"]);
      },
      (error) => {
        console.log("Logout error", error);
      }
    );
  }
}
