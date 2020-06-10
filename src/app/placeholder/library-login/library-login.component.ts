import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { Router, Params } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "wpdh-library-login",
  templateUrl: "./library-login.component.html",
  styleUrls: ["./library-login.component.scss"],
})
export class LibraryLoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value).then(
      (res) => {
        this.router.navigate(["/"]);
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
