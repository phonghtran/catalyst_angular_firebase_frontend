import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: Array<Object>;
  @Input() showHome: boolean = false;
  _iconColor: string = "-colorAccentLightBlue";

  mouseEnter(index: number) {
    if (index === 0) {
      this._iconColor = "-colorAccentTeal";
    }
  }

  mouseLeave(index: number) {
    if (index === 0) {
      this._iconColor = "-colorAccentLightBlue";
    }
  }

  constructor() {}

  ngOnInit() {}
}
