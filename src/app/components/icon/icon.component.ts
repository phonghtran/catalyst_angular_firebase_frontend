import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit {
  @Input() count: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
