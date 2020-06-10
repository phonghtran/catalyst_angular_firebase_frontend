import { Component, OnInit } from "@angular/core";
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
  selector: "wpdh-sectionCollapsable",
  templateUrl: "./section-collapsable.component.html",
  styleUrls: ["./section-collapsable.component.scss"],
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
          height: 0,
        })
      ),
      transition("false <=> true", [animate("125ms")]),
    ]),
  ],
})
export class SectionCollapsableComponent implements OnInit {
  _closed = true;
  _iconPath = "arrow-dropdown";
  _label = "Expand";

  changeExpandState() {
    this._closed = !this._closed;

    if (this._closed) {
      this._iconPath = "arrow-dropdown";
      this._label = "Expand";
    } else {
      this._iconPath = "arrow-dropup";
      this._label = "Collapse";
    }
  }

  constructor() {}

  ngOnInit() {}
}
