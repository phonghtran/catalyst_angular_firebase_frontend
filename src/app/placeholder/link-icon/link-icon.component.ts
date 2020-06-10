import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-link-icon",
  templateUrl: "./link-icon.component.html",
  styleUrls: ["./link-icon.component.scss"],
})
export class LinkIconComponent implements OnInit {
  @Input() icon: string;
  iconClass: string = "-colorAccentLightBlue";
  @Input() href: string;

  isHover(state) {
    if (state === true) {
      this.iconClass = "-colorPrimaryGreen";
    } else {
      this.iconClass = "-colorAccentLightBlue";
    }
  }

  constructor() {}

  ngOnInit() {}
}
