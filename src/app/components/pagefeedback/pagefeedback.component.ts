import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-pagefeedback",
  templateUrl: "./pagefeedback.component.html",
  styleUrls: ["./pagefeedback.component.scss"],
})
export class PagefeedbackComponent implements OnInit {
  _hoverColor: Array<String> = ["-colorPrimaryBlack", "-colorPrimaryBlack"];
  mouseEnter(offset: number) {
    if (offset == 0) {
      this._hoverColor[offset] = "-colorPrimaryGreen";
    } else {
      this._hoverColor[offset] = "-colorAccentRed";
    }
  }

  mouseLeave(offset: number) {
    this._hoverColor[offset] = "-colorPrimaryBlack";
  }

  constructor() {}

  ngOnInit() {}
}
