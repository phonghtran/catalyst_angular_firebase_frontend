import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
  @Input() items: Array<Object>;

  constructor() {}

  ngOnInit() {}
}
