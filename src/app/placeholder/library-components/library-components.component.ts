import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wpdh-library-components",
  templateUrl: "./library-components.component.html",
  styleUrls: ["./library-components.component.scss"],
})
export class LibraryComponentsComponent implements OnInit {
  title = "angular-scss";

  _breadcrumbItems = [
    { label: "Home", url: "#" },
    { label: "APIs", url: "#" },
    { label: "Launchpad", url: "#" },
  ];

  _breadcrumbItemsHomeOnly = [{ label: "Home", url: "#" }];

  _modalClosed = false;
  _tooltipClosed = true;
  _tooltipLocation = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  };

  _accordionItems = [
    {
      title: "Title",
      dateStamp: "April 27, 2020",
      hiddenContent: "Hidden Content",
    },
    {
      title: "Title",
      dateStamp: "April 28, 2020",
      hiddenContent: "Hidden Content",
    },
    {
      title: "Title",
      dateStamp: "April 29, 2020",
      hiddenContent: "Hidden Content",
    },
  ];

  _navItems = [
    { label: "Launchpad Overview", url: "#" },
    {
      label: "Launchpad APIs",
      url: "#",
      active: true,
      showOnLoad: true,
      children: [
        {
          label: "Merchant Boarding ",
          url: "#",
          active: true,
          showOnLoad: true,
          children: [
            { label: "Lorem 1", url: "#", active: true },
            { label: "Lorem 2 ", url: "#" },
            { label: "Lorem 3", url: "#" },
            { label: "Lorem 4", url: "#" },
          ],
        },
        {
          label: "Leads ",
          url: "#",
          children: [
            { label: "Lorem 1", url: "#", active: true },
            { label: "Lorem 2 ", url: "#" },
            { label: "Lorem 3", url: "#" },
            { label: "Lorem 4", url: "#" },
          ],
        },
        { label: "Equipment Lookup ", url: "#" },
        { label: "Pricing ", url: "#" },
      ],
    },
    {
      label: "Resources",
      url: "#",
      children: [
        { label: "Lorem 1", url: "#", active: true },
        { label: "Lorem 2 ", url: "#" },
        { label: "Lorem 3", url: "#" },
        { label: "Lorem 4", url: "#" },
      ],
    },
  ];

  showModal() {
    this._modalClosed = true;
  }

  dismissModal($event: any) {
    this._modalClosed = $event;
  }

  showTooltip($event) {
    this._tooltipClosed = false;

    this._tooltipLocation = $event.target.getBoundingClientRect();
  }

  clearTooltip() {
    this._tooltipClosed = true;
  }

  constructor() {}

  ngOnInit() {}
}
