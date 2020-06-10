import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
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
  selector: "wpdh-workflow-card",
  templateUrl: "./workflow-card.component.html",
  styleUrls: ["./workflow-card.component.scss"],
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
export class WorkflowCardComponent implements OnInit {
  @ViewChild("childrenContainer", { static: false })
  childrenContainer: ElementRef;

  @Input() status: string = "";
  @Input() order: string;

  _iconProperties = {
    iconPath: "",
    className: "",
  };

  _childrenCollapsedState = {
    closed: true,
    iconPath: "arrow-dropdown",
    label: "Expand",
  };

  _childrenExist = false;

  changeExpandState() {
    this._childrenCollapsedState.closed = !this._childrenCollapsedState.closed;

    if (this._childrenCollapsedState.closed) {
      this._childrenCollapsedState.iconPath = "arrow-dropdown";
      this._childrenCollapsedState.label = "Expand";
    } else {
      this._childrenCollapsedState.iconPath = "arrow-dropup";
      this._childrenCollapsedState.label = "Collapse";
    }
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    switch (this.status) {
      case "active":
        this._iconProperties.iconPath = this.status;
        this._iconProperties.className =
          "-colorSupportingWhite -backgroundSupportingWhite -round";
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

  ngAfterViewInit() {
    this._childrenExist =
      this.childrenContainer.nativeElement.childNodes.length <= 0;

    this.cdRef.detectChanges();
  }
}
