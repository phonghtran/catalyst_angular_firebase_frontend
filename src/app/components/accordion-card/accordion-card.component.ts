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
  selector: "wpdh-accordion-card",
  templateUrl: "./accordion-card.component.html",
  styleUrls: ["./accordion-card.component.scss"],
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
export class AccordionCardComponent implements OnInit {
  _closed = true;
  _iconPath = "plus";

  changeExpandState() {
    this._closed = !this._closed;

    if (this._closed) {
      this._iconPath = "plus";
    } else {
      this._iconPath = "less";
    }
  }
  constructor() {}

  ngOnInit() {}
}
