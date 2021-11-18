import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.ajaxService.getData("http://localhost:8080/api/assignments");
    // fetch("http://localhost:8080/api/assignments").then((response) =>
    //   console.log(response.text())
    // );
  }
}
