import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-masthead",
  templateUrl: "./masthead.component.html",
  styleUrls: ["./masthead.component.scss"],
})
export class MastheadComponent implements OnInit {
  @Input() image: string = "";

  scrollDown() {
    const container = document.getElementsByClassName(
      "wpdh-masthead_imageContainer"
    );

    if (window.scrollY < container[0].clientHeight * 0.9) {
      const target = window.scrollY + container[0].clientHeight * 0.9;

      window.scrollTo({ top: target, left: 0, behavior: "smooth" });
    }
  }
  constructor() {}

  ngOnInit() {}
}
