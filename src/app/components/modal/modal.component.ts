import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "wpdh-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Output() dismissEvent = new EventEmitter<boolean>();

  placeholderDismiss() {
    this.dismissEvent.emit(false);
  }
  constructor() {}

  ngOnInit() {}
}
