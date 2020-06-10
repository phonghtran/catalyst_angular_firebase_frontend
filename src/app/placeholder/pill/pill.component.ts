import { Component, Input, Output, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-pill",
  templateUrl: "./pill.component.html",
  styleUrls: ["./pill.component.scss"],
})
export class PillComponent implements OnInit {
  @Input() canClick: boolean = false;

  @Input() checked: boolean = false;

  toggleCheckedStatus() {
    if (this.canClick) {
      this.checked = !this.checked;
    }
  }

  constructor() {}

  ngOnInit() {}
}
