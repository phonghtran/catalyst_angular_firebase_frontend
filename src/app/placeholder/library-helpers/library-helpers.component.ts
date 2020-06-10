import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-library-helpers",
  templateUrl: "./library-helpers.component.html",
  styleUrls: ["./library-helpers.component.scss"],
})
export class LibraryHelpersComponent implements OnInit {
  _codeStrings = [
    "div { margin: spacer(2); // 6 pixels }",
    "$hairline: 0.0625rem; // 1px",
    "$borderWidth: 0.1875rem; // 3px",
    ".mt-0 { margin-top: 0; }",
    ".mb-0 { margin-bottom: 0; }",
    '<h4 class="mb-0">Need</h4>\n<h3 class="mt-0 -fontDisplay -fontColorBlue">SUPPORT</h3>',
    '<div class="d-md-flex justify-content-between">\n\t<div>\n\t\t<wpdh-icon (click)="changeExpandState()" [icon]="_iconPath" class="-colorSupportingBlack -round -backgroundAccentCoolGray -floatLeft" ></wpdh-icon>\n\t\t<h5 class="wpdh-accordion__title"> \n\t\t\t<ng-content select="[title]"></ng-content>\n\t\t</h5>\n\t</div>\n\t<div>\n\t\t<h5 class="wpdh-accordion__date">\n\t\t\t<ng-content select="[dateStamp]"></ng-content>\n\t\t</h5> \n\t</div> \n</div>',
    " @each $color, $value in $colors {\r\n    &.-#{$color} {\r\n\t\t#{$class} {\r\n\t\t\t#{$property}: #{$value};\r\n\t\t}\r\n\t}\r\n  }",
    ':host {\r\n  @include colorClasses("span", "background-color");\r\n}',
    ".-fontColorGreen {\r\n  color: $colorAccentTeal;\r\n}\r\n\r\n.-fontColorBlue {\r\n  color: $colorAccentLightBlue;\r\n}",
    'animations: [\r\n    trigger("_closed", [\r\n      state(\r\n        "false",\r\n        style({\r\n          height: AUTO_STYLE,\r\n        })\r\n      ),\r\n      state(\r\n        "true",\r\n        style({\r\n          height: 0,\r\n        })\r\n      ),\r\n      transition("false <=> true", [animate("125ms")]),\r\n    ]),\r\n  ],',
    '  _closed = true;\r\n  _iconPath = "plus";\r\n\r\n  changeExpandState() {\r\n    this._closed = !this._closed;\r\n\r\n    if (this._closed) {\r\nthis._iconPath = "plus";\r\n    } else {\r\nthis._iconPath = "less";\r\n    }\r\n  }',
    ' <wpdh-icon\r\n    (click)="changeExpandState()"\r\n    [icon]="_iconPath"\r\n    class="-colorSupportingBlack -round -backgroundAccentCoolGray -floatLeft"\r\n  ></wpdh-icon>\r\n<div class="row wpdh-accordion__hiddenRow" [@_closed]="_closed">',
    ' <wpdh-workflow-card status="active">\r\n  <ng-container title>Title</ng-container>\r\n  <ng-container description>\r\nLorem ipsum dolor sit amet consect etur, adip isicing\r\nelit.</ng-container\r\n  >\r\n</wpdh-workflow-card>',
    '<p>\r\n      <ng-content select="[title]"></ng-content>\r\n      &nbsp;\r\n      <span class="-fontXSmall">\r\n<ng-content select="[taskCount]"></ng-content>\r\n      </span>\r\n    </p>',
    '<symbol id="actionNeeded" viewBox="0 0 4 16">\r\n\t<path d="M3.07865169,9.86516854 L3.5505618,2.98876404 L3.66292135,0 L0.337078652,0 L0.449438202,2.98876404 L0.921348315,9.86516854 L3.07865169,9.86516854 Z M2,15.3258427 C2.56928839,15.3258427 3.04494382,15.1273408 3.42696629,14.7303371 C3.80898876,14.3333333 4,13.8426966 4,13.258427 C4,12.659176 3.80898876,12.1610487 3.42696629,11.7640449 C3.04494382,11.3670412 2.56928839,11.1685393 2,11.1685393 C1.43071161,11.1685393 0.95505618,11.3670412 0.573033708,11.7640449 C0.191011236,12.1610487 0,12.659176 0,13.258427 C0,13.8426966 0.191011236,14.3333333 0.573033708,14.7303371 C0.95505618,15.1273408 1.43071161,15.3258427 2,15.3258427 Z"></path>\r\n</symbol>',
  ];
  constructor() {}

  ngOnInit() {}
}
