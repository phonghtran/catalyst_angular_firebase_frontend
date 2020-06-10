import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-library-globals",
  templateUrl: "./library-globals.component.html",
  styleUrls: ["./library-globals.component.scss"],
})
export class LibraryGlobalsComponent implements OnInit {
  _codeStrings = [
    '<h1 class="-fontDisplayLarge -fontDisplay">\r\nDisplay Giga (76px/300/95px)\r\n</h1>',
    '<wpdh-icon\r\n[icon]="\'actionNeeded\'"\r\nclass="-backgroundAccentYellow -round">\r\n</wpdh-icon>',
    '<wpdh-icon\r\n[icon]="\'tagcount\'"\r\n[count]="9"\r\nclass="-colorSupportingWhite -textSupportingWhite -md">\r\n</wpdh-icon>\r\n',
    '<wpdh-icon [icon]="\'facehappy\'" class="-colorAccentYellow"></wpdh-icon>\r\n<wpdh-icon [icon]="\'facehappy\'" class="-colorAccentTeal"></wpdh-icon>\r\n<wpdh-icon [icon]="\'facehappy\'" class="-colorAccentLightPurple"></wpdh-icon>\r\n<wpdh-icon [icon]="\'facehappy\'" class="-colorAccentLightRed"></wpdh-icon>',
    '<wpdh-icon [icon]="\'plus\'" class="-sm -colorSupportingWhite"></wpdh-icon>\r\n<wpdh-icon [icon]="\'plus\'" class="-colorSupportingWhite"></wpdh-icon>\r\n<wpdh-icon [icon]="\'plus\'" class="-md -colorSupportingWhite"></wpdh-icon>\r\n<wpdh-icon [icon]="\'plus\'" class="-lg -colorSupportingWhite"></wpdh-icon>',
  ];

  constructor() {}

  ngOnInit() {}
}
