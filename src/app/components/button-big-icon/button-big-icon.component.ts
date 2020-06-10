import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "wpdh-button-big-icon",
  templateUrl: "./button-big-icon.component.html",
  styleUrls: ["./button-big-icon.component.scss"],
})
export class ButtonBigIconComponent implements OnInit {
  _hoverColor: string = "-backgroundTintPrimaryBlackT60";
  @Input() icon: string;

  mouseEnter() {
    this._hoverColor = "-backgroundSupportingWhite";
  }

  mouseLeave() {
    this._hoverColor = "-backgroundTintPrimaryBlackT60";
  }

  constructor() {}

  ngOnInit() {}
}
