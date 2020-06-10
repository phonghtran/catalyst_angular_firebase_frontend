import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  selector: "wpdh-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
})
export class TooltipComponent implements OnInit {
  @ViewChild("tooltipContainer", { static: false })
  tooltipContainer: ElementRef;

  @Input() location = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  };
  computedLocation = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  };

  svgChar = {
    x: "middle",
    y: "bottom",
    d: "M0,0 L50,0 L50,50 L0,50 L0,0 Z",
    viewBox: "0 0 0 0",
  };

  constructor(private cdRef: ChangeDetectorRef) {}

  generateSVGCorner(cornerType: string, x: number, y: number) {
    var path: string = "C";

    switch (cornerType) {
      case "tr":
        path += x + 3 + "," + y + " ";
        path += x + 6 + "," + (y + 3) + " ";
        path += x + 6 + "," + (y + 6) + " ";
        break;
      case "br":
        path += x + "," + (y + 3) + " ";
        path += x - 3 + "," + (y + 6) + " ";
        path += x - 6 + "," + (y + 6) + " ";
        break;
      case "bl":
        path += x - 3 + "," + y + " ";
        path += x - 6 + "," + (y - 3) + " ";
        path += x - 6 + "," + (y - 6) + " ";
        break;
      case "tl":
        path += x + "," + (y - 3) + " ";
        path += x + 6 + "," + (y - 6) + " ";
        path += x + 6 + "," + (y - 6) + " ";
        break;
    }

    return path;
  }

  generateSVGTail(y: number) {
    var path: string = "L";
    const yDelta = this.svgChar.y === "top" ? -6 : 6;

    switch (this.svgChar.x) {
      case "middle":
        const midpoint = this.computedLocation.width / 2;

        path += midpoint + 6 + "," + y + " ";
        path += "L" + midpoint + "," + (y + yDelta) + " ";
        path += "L" + (midpoint - 6) + "," + y + " ";
        break;

      case "left":
        path += 24 + "," + y + " ";
        path += "L" + 18 + "," + (y + yDelta) + " ";
        path += "L" + 12 + "," + y + " ";
        break;

      case "right":
        const startingPoint = this.computedLocation.width - 12;
        path += startingPoint + "," + y + " ";
        path += "L" + (startingPoint - 6) + "," + (y + yDelta) + " ";
        path += "L" + (startingPoint - 12) + "," + y + " ";
        break;
    }
    return path;
  }
  generateSVGPath() {
    var botY: number, topY: number, botTail: string, topTail: string;

    if (this.svgChar.y === "bottom") {
      botY = this.computedLocation.height - 6;
      topY = 0;
      botTail = this.generateSVGTail(botY);
      topTail = "";
    } else {
      botY = this.computedLocation.height;
      topY = 6;
      botTail = "";
      topTail = this.generateSVGTail(topY);
    }

    this.svgChar.d =
      "M" +
      (this.computedLocation.width - 6) +
      "," +
      topY +
      " " +
      this.generateSVGCorner("tr", this.computedLocation.width - 6, topY) +
      "L" +
      this.computedLocation.width +
      "," +
      (botY - 6) +
      " " +
      this.generateSVGCorner("br", this.computedLocation.width, botY - 6) +
      botTail +
      "L" +
      6 +
      "," +
      botY +
      " " +
      this.generateSVGCorner("bl", 6, botY) +
      "L0," +
      (topY + 6) +
      " " +
      this.generateSVGCorner("tl", 0, topY + 6) +
      topTail +
      " Z";
  }
  ngOnInit() {}

  ngAfterViewInit() {
    this.computedLocation = this.tooltipContainer.nativeElement.getBoundingClientRect();

    const adjustForParentWidth = this.location.width / 2;

    this.computedLocation.x =
      this.location.x + adjustForParentWidth - this.computedLocation.width / 2;
    this.computedLocation.y =
      this.location.y - this.computedLocation.height - 12;

    if (
      this.computedLocation.x + this.computedLocation.width >
      window.innerWidth
    ) {
      // if tooltip is too far right
      this.computedLocation.x =
        this.location.x + this.location.width - this.computedLocation.width;

      this.svgChar.x = "right";
    }

    if (this.computedLocation.x < 0) {
      // if tooltip is too far left
      this.computedLocation.x = this.location.x;

      this.svgChar.x = "left";
    }

    if (window.innerWidth < 768) {
      this.computedLocation.x = 24;

      const relativePosition = this.location.x / window.innerWidth;

      if (relativePosition < 0.33) {
        this.svgChar.x = "left";
      } else if (relativePosition > 0.66) {
        this.svgChar.x = "right";
      } else {
        this.svgChar.x = "middle";
      }
    }
    if (this.computedLocation.y < this.computedLocation.height) {
      this.computedLocation.y = this.location.y + this.location.height + 12;

      this.svgChar.y = "top";
    }

    this.svgChar.viewBox =
      "0 0 " + this.computedLocation.width + " " + this.computedLocation.height;

    this.generateSVGPath();

    this.cdRef.detectChanges();
  }
}
