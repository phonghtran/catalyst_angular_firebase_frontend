import { Component, Input, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AUTO_STYLE,
  // ...
} from "@angular/animations";

@Component({
  selector: "wpdh-pill-holder-collapsable",
  templateUrl: "./pill-holder-collapsable.component.html",
  styleUrls: ["./pill-holder-collapsable.component.scss"],
  animations: [
    trigger("_closed", [
      state(
        "false",
        style({
          height: AUTO_STYLE,
        })
      ),
      state(
        "true",
        style({
          height: "2.5rem",
        })
      ),
      transition("false <=> true", [animate("125ms")]),
    ]),
  ],
})
export class PillHolderCollapsableComponent implements OnInit {
  _closed = true;
  _iconPath = "tagcount";
  _iconDisplay: string = "+1";

  @Input() tagCount: number; // Recieve the pill count here and pass it to the iconDisplay

  changeExpandState() {
    this._closed = !this._closed;

    if (this._closed) {
      this._iconPath = "tagcount";
      this._iconDisplay = "+1";
    } else {
      this._iconPath = "arrow-dropup";
      this._iconDisplay = "";
    }
  }

  constructor() {}

  ngOnInit() {}
}
