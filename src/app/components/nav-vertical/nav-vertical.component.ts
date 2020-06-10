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
  selector: "wpdh-nav-vertical",
  templateUrl: "./nav-vertical.component.html",
  styleUrls: ["./nav-vertical.component.scss"],
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
export class NavVerticalComponent implements OnInit {
  @Input() navItems: Array<Object>;
  _closed = false;
  _closedStates: Object = {
    p: [],
    c: [],
  };

  toggleChild(level: string, id: number) {
    this._closedStates[level][id]["state"] = !this._closedStates[level][id][
      "state"
    ];

    let newIcon = "";

    switch (this._closedStates[level][id]["icon"]) {
      case "arrow-dropdown":
        newIcon = "arrow-dropup";
        break;
      case "arrow-dropup":
        newIcon = "arrow-dropdown";
        break;
      case "less":
        newIcon = "plus";
        break;
      case "plus":
        newIcon = "less";
        break;
    }

    this._closedStates[level][id]["icon"] = newIcon;

    console.log(this._closedStates);

    // this._closed = !this._closed;
  }

  constructor() {}

  ngOnInit() {
    for (let item in this.navItems) {
      if (this.navItems[item]["children"]) {
        if (this.navItems[item]["showOnLoad"]) {
          this._closedStates["p"][item] = {
            state: false,
            icon: "arrow-dropup",
          };
        } else {
          this._closedStates["p"][item] = {
            state: true,

            icon: "arrow-dropdown",
          };
        }

        for (let child in this.navItems[item]["children"]) {
          if (this.navItems[item]["children"][child]["children"]) {
            if (this.navItems[item]["children"][child]["showOnLoad"]) {
              this._closedStates["c"][child] = {
                state: false,

                icon: "less",
              };
            } else {
              this._closedStates["c"][child] = {
                state: true,
                icon: "plus",
              };
            }
          }
        }
      }
    }
  }
}
