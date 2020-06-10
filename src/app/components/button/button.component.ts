import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit() {}
}
