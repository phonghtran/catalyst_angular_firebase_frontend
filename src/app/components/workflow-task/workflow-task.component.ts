import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-workflow-task",
  templateUrl: "./workflow-task.component.html",
  styleUrls: ["./workflow-task.component.scss"],
})
export class WorkflowTaskComponent implements OnInit {
  @Input() status: string = "";

  _iconProperties = {
    iconPath: "",
    className: "",
  };

  constructor() {}

  ngOnInit() {
    switch (this.status) {
      case "actionNeeded":
        this._iconProperties.iconPath = this.status;
        this._iconProperties.className =
          "-colorTintPrimaryBlack -backgroundAccentYellow -round";
        break;
      case "check":
        this._iconProperties.iconPath = this.status;
        this._iconProperties.className =
          "-colorTintPrimaryBlack -backgroundPrimaryGreen -round";
        break;
      default:
        this._iconProperties.iconPath = "inactive";
        this._iconProperties.className =
          "-colorTintPrimaryBlackT60 -backgroundTintPrimaryBlackT60 -round";
        break;
    }
  }
}
